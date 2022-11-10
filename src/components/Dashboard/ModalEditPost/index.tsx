import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ForumContext } from "../../../Context/ForumContext";
import { instance } from "../../../Service/api";
import { iPropsModal } from "../CardPosts";
import { RegisterPost } from "./style";

const ModalEdit = ({
  handleModalUpdate,
  postidCard,
  postsContent,
}: iPropsModal) => {
  const { register, handleSubmit } = useForm({
    defaultValues: { text: postsContent },
  });

  const { post, setPost, getPosts } = useContext(ForumContext);

  const editPost = async (text: any) => {
    console.log(text);
    try {
      const token = localStorage.getItem("@dev-path:token");
      instance.defaults.headers.authorization = `Bearer ${token}`;

      const { data } = await instance.patch(`/posts/${postidCard}`, text);
      console.log(data);
      getPosts();
      setPost([...post, data]);
      handleModalUpdate();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {}, [postsContent]);

  return (
    <>
      <RegisterPost>
        <main>
          <h2>Editar postagem</h2>

          <form className="modalForm" onSubmit={handleSubmit(editPost)}>
            <textarea id="text" {...register("text")} />
            <div>
              <button className="edit">Editar</button>
              <button className="cancel" onClick={() => handleModalUpdate()}>
                cancelar
              </button>
            </div>
          </form>
        </main>
      </RegisterPost>
    </>
  );
};
export default ModalEdit;
