import { useContext, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import CardPosts from "../../Components/Dashboard/CardPosts";
import HeaderDashboard from "../../Components/Dashboard/HeaderDashboard";
import Footer from "../../Components/Footer";
import { ForumContext, iPost } from "../../Context/ForumContext";
import { DivButton, DivUser, Container } from "./style";
import img from "../../Assets/devs/erik.png";
import { motion } from "framer-motion";
import { resolveObjectURL } from "buffer";
import { indigo } from "@mui/material/colors";

export interface iPostProps {
  post: iPost[];
}

const Forum = () => {
  const { newPost, post } = useContext(ForumContext);

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
            <img src={img} alt="" />
            <div>
              <h4>Nome do Dev</h4>
              <h5>Ocupação do dev</h5>
            </div>
          </DivUser>

          <section>
            <h5>Compartilhe conosco!</h5>
            <form onSubmit={handleSubmit(newPost)}>
              <textarea
                placeholder="O que temos pra hoje?"
                {...register("text")}
              ></textarea>
              <DivButton>
                <button type="submit">Postar</button>
              </DivButton>
            </form>
            <ul>
              {/* {JSON.stringify(post, null, 2)} */}
              {post?.length === 0 ? (
                <li>
                  <h2>Nada por aqui 😪</h2>
                </li>
              ) : (
                post?.map((posts, index) => (
                  <CardPosts
                    key={index}
                    postsContent={posts.text}
                    postsUId={posts.userId}
                  />
                ))
              )}
            </ul>
          </section>
        </Container>
        <Footer />
      </motion.div>
    </>
  );
};

export default Forum;
