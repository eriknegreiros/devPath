import { Section } from "./style";
import img from "../../../Assets/code.png";

const LandWithImage = () => {
  return (
    <>
      <Section>
        <img src={img} alt="" />
        <div>
          <h2>O guia de estudo para estudar programação totalmente gratis</h2>
          <p>
            O mapa completo para você impulsionar sua evolução e acessar as
            melhores oportunidades da sua carreira como dev.
          </p>

          <button>Acesse já!</button>
        </div>
      </Section>
    </>
  );
};

export default LandWithImage;
