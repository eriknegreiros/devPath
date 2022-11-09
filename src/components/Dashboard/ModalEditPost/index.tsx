import { iPropsModal } from "../CardPosts";
import { RegisterTech } from "./style";

const ModalEdit = ({ handleModalUpdate }: iPropsModal) => {
  return (
    <>
      <RegisterTech>
        <main>
          <h2>Editar postagem</h2>

          <form className="modalForm">
            <textarea name="" id="" />
            <div>
              <button className="edit">Editar</button>
              <button className="cancel" onClick={() => handleModalUpdate()}>
                cancelar
              </button>
            </div>
          </form>
        </main>
      </RegisterTech>
    </>
  );
};
export default ModalEdit;
