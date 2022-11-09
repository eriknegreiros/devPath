import { createContext, useState, useEffect, useContext } from "react";
import { instance } from "../../Service/api";
import { UserContext } from "../UserContext";
// import { toast } from "react-toastify";

export interface iDefaultContextProps {
  children: React.ReactNode;
}

export interface iPost {
  userId: string;
  text: string;
}

interface IDashboardContext {
  post: iPost[];
  newPost: (data: iPost) => void;
}

export const ForumContext = createContext<IDashboardContext>(
  {} as IDashboardContext
);

export const DashboardForum = ({ children }: iDefaultContextProps) => {
  const [post, setPost] = useState([] as iPost[]);
  const [state, setState] = useState(false);
  const { profile } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("@dev-path:token");
        instance.defaults.headers.authorization = `Bearer ${token}`;

        const user = await instance.get("/posts");
        console.log(user);

        setPost(user.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [state]);

  const newPost = async (data: iPost) => {
    const newData = {
      ...data,
      userId: profile?.id,
    };
    console.log(profile);
    try {
      const token = localStorage.getItem("@dev-path:token");
      instance.defaults.headers.authorization = `Bearer ${token}`;

      await instance.post("/posts", newData);

      // toast.success("Aeee! Publicado com sucesso! 👩‍💻");
    } catch (error) {
      console.log(error);
      // toast.error("Opa! Algo deu errado 👀");
    } finally {
      setState(!state);
    }
  };

  return (
    <ForumContext.Provider
      value={{
        newPost,
        post,
      }}
    >
      {children}
    </ForumContext.Provider>
  );
};
