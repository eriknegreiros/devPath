import i from "../../../Assets/brain.png";
import { ModalContensStyled } from "./style";

const ModalContents = () => {
  function fecharModal() {}
  return (
    <ModalContensStyled>
      <div className="modal">
        <h3>TituloModal</h3>
        <button onClick={fecharModal}>X</button>

        <section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ad
            tenetur ipsum et distinctio eum dignissimos quam. Adipisci officiis
            sunt dolorum ab, quos dolore sequi quibusdam illum sint minus
            dolores?
          </p>
          <img src={i} alt="" />
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde,
            corporis? Odit, nostrum at praesentium illum eum ipsum alias
            molestiae quasi veritatis sed consequuntur facere quia earum eveniet
            sequi, ducimus ipsam!
          </span>
        </section>
      </div>
    </ModalContensStyled>
  );
};
export default ModalContents;
