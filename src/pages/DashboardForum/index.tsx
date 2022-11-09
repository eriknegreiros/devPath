import { useContext, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import CardPosts from "../../Components/Dashboard/CardPosts";
import HeaderDashboard from "../../Components/Dashboard/HeaderDashboard";
import Footer from "../../Components/Footer";
import { ForumContext, iPost } from "../../Context/ForumContext";
import { DivButton, DivUser, Container } from "./style";
import { motion } from "framer-motion";
import { UserContext } from "../../Context/UserContext";

export interface iPostProps {
  post: iPost[];
}

const Forum = () => {
  const { newPost, post } = useContext(ForumContext);
  const { profile } = useContext(UserContext);


  const addPost = yup.object().shape({
    text: yup.string().required("*Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors },
  } = useForm<iPost>({
    resolver: yupResolver(addPost),
  });
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <HeaderDashboard />
        <Container>
          <DivUser>
            <img src={profile?.image} alt="foto do usuário" />
            <div>
              <h4>{profile?.name}</h4>
              <h5>{profile?.occupation}</h5>
            </div>
          </DivUser>

          <section>
            <h5>Compartilhe conosco!</h5>
            <form onSubmit={handleSubmit(newPost)}>
              <textarea
                {...register("text")}
                placeholder="Fale um pouco sobre o que está estudando ou compartilhe alguma dica de estudo"
              ></textarea>
              <DivButton>
                <button type="submit">Postar</button>
              </DivButton>
            </form>
            <ul>
              {/* {JSON.stringify(post, null, 2)} */}
              {post?.length === 0 && (
                <li>
                  <h2>Nada por aqui 😪</h2>
                </li>
              )}
              {post?.map((posts, index) => (
                <CardPosts
                  key={index}
                  postsContent={posts.text}
                  postsUId={posts.userId}
                  postsImage={posts.image}
                  postsName={posts.name}
                  postsOccupation={posts.occupation}
                  />
              ))}
            </ul>
          </section>
        </Container>
        <Footer />
      </motion.div>
    </>
  );
};




export default Forum;
