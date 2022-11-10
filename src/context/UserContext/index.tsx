import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { iLogin } from "../../Pages/Login";
import { instance } from "../../Service/api";

interface iAuthProps {
  children: ReactNode;
}

export interface iUser {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  occupation: string;
  image?: string;
}

interface iResponse {
  accessToken: string;
  user: iProfile;
}
interface iProfile {
  name: string;
  email: string;
  id: number;
  occupation: string;
  image?: string;
}

interface iUserContext {
  registerUser: (data: iUser) => Promise<void>;
  loginUser: (data: iLogin) => Promise<void>;
  loading: boolean;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  profile: iProfile | null;
  token: string | null;
}

export const UserContext = createContext({} as iUserContext);

export const AuthProvider = ({ children }: iAuthProps) => {

  const [refreshing, setRefreshing] = useState(true);
  const [profile, setProfile] = useState<iProfile | null>(null);
  const [token, setToken] = useState(
    localStorage.getItem("@dev-path:token") || null
  );
  const [loading, setLoading] = useState(false);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const registerUser = async (data: iUser): Promise<void> => {
    try {
      setLoading(true);

      const response = await instance.post<iResponse>("/register", data);

      toast.success("Cadastro Realizado com Sucesso", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      navigate("/login");
    } catch (error: any) {
      const requestError = error;
      toast.error(requestError.response?.data);
    } finally {
      setLoading(false);
    }
  };

  const loginUser = async (data: iLogin): Promise<void> => {
    
    try {
      setLoading(true);

      const response = await instance.post<iResponse>("/login", data);

      window.localStorage.clear();

      const { accessToken, user } = response.data;

      localStorage.setItem("@dev-path:token", accessToken);

      setProfile(user);

      toast.success("Logado com Sucesso", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      navigate("/dashboard/selectTask");
    } catch (error: any) {
      const requestError = error;
      toast.error(requestError.response?.data);
    } finally {
      setLoading(false);
    }
  };



  return (
    <UserContext.Provider
      value={{
        registerUser,
        profile,
        isOpen,
        setIsOpen,
        loginUser,
        loading,
        token,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
