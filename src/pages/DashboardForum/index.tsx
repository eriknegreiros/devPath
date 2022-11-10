import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import CardPosts from "../../Components/Dashboard/CardPosts";
import Footer from "../../Components/Footer";
import { ForumContext, iPost } from "../../Context/ForumContext";
import { DivButton, DivUser, Container } from "./style";
import { motion } from "framer-motion";
import { UserContext } from "../../Context/UserContext";
import HeaderDashboardForum from "../../Components/Dashboard/HeaderDashboard/HeaderForum";

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
        <HeaderDashboardForum />
        <Container>
          <DivUser>
            <span className="circleImage">
              <img src={profile?.image} alt="foto do usuário" />
            </span>
            <div>
              <h2>{profile?.name}</h2>
              <h3>{profile?.occupation}</h3>
            </div>
          </DivUser>

          <section className="sectionPosts">
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
              {post?.map((posts) => (
                <CardPosts
                  id={posts.id}
                  key={posts.id}
                  postsContent={posts.text}
                  postsUId={posts.userId}
                  postsImage={posts.image}
                  postsName={posts.name}
                  postsOccupation={posts.occupation}
                  postidCard={posts.id}
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
