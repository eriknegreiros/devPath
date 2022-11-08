import { iPropsModal } from "../CardPosts";
import { RegisterTech } from "./style";

const ModalEdit = ({ handleModalUpdate }: iPropsModal) => {
  return (
    <>
      <RegisterTech>
        <main>
          <div>
            <h2>Editar postagem</h2>
            <button onClick={() => handleModalUpdate()}>X</button>
          </div>
          <form>
            <textarea name="" id=""></textarea>
            <button>Editar</button>
          </form>
        </main>
      </RegisterTech>
    </>
  );
};
export default ModalEdit;
