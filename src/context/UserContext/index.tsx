import { createContext, ReactNode} from "react";
import { useNavigate } from "react-router-dom";
// import api from "../services/api";

interface iAuthProps {
  children: ReactNode;
}

export interface iUser {
  id: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  occupation: string;
}

interface iUserContext {
  registerUser: (data: iUser) => void;
}

export const UserContext = createContext({} as iUserContext);

export const AuthProvider = ({ children }: iAuthProps) => {
  const navigate = useNavigate();

  const registerUser = async (data: iUser) => {
    try {
      // await api
      //   .post("/registerUser", data)
      //   .then((response) => console.log(response.data));

      console.log(data);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <UserContext.Provider value={{ registerUser }}>
      {children}
    </UserContext.Provider>
  );
};
