import { createContext, useState, useEffect, useContext } from "react";
import { instance } from "../../Service/api";
import { UserContext } from "../UserContext";
import { AxiosResponse } from "axios";
// import { toast } from "react-toastify";

export interface iDefaultContextProps {
  children: React.ReactNode;
}

export interface iPost {
  userId: string;
  text: string;
  name: string;
  image: string;
  occupation: string;
}



interface IDashboardContext {
  post: iPost[] ;
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
    getPosts();
  }, []);

  

  const getPosts = async () => {
    try {
      const token = localStorage.getItem("@dev-path:token");
      instance.defaults.headers.authorization = `Bearer ${token}`;

      const user = await instance.get("/posts");
      setPost([...user.data.splice(0, 10)]);
      
    
      console.log(user)

      

    } catch (error) {
      console.log(error);
    }
  };




  const newPost = async (data: iPost) => {
    
    const newData = {
      ...data,
      userId: profile?.id,
      name: profile?.name,
      image: profile?.image,
      occupation: profile?.occupation,
    };

    try {
      const token = localStorage.getItem("@dev-path:token");
      instance.defaults.headers.authorization = `Bearer ${token}`;

      const resRequest = await instance.post("/posts", newData);

      
      setPost([resRequest.data, ...post]);

      console.log(post)

      
      //toast.success("Aeee! Publicado com sucesso! 👩‍💻");
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
