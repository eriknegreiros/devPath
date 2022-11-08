import { createContext, useState, useEffect } from "react";
import { instance } from "../../service/api";
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

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("@DevPath:token");
        instance.defaults.headers.authorization = `Bearer ${token}`;

        const user = await instance.get("users");

        setPost(user.data.posts);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const newPost = async (data: iPost) => {
    console.log(data);

    try {
      const response = await instance.post("posts", data);

      console.log(response);

      // toast.success("Aeee! Publicado com sucesso! 👩‍💻");

      setPost([...post, response.data]);
    } catch (error) {
      console.log(error);
      // toast.error("Opa! Algo deu errado 👀");
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
