import { Section, DivText } from "./style";
import objective from "../../../Assets/objective.png";
import study from "../../../Assets/study.png";
import free from "../../../Assets/free.png";

const WhyDevPath = () => {
  return (
    <>
      <DivText>
        <h2>Por que escolher a devPath?</h2>
      </DivText>
      <Section>
        <div>
          <img src={objective} alt="" />

          <h3>Foco</h3>
          <p>
            Programação é um universo infinito, logo ter foco é essencial. Nós
            vamos direto ao ponto no que realmente importa para você dominar as
            ferramentas, não apenas conhecê-las.
          </p>
        </div>

        <div>
          <img src={study} alt="" />

          <h3>Prática</h3>
          <p>
            A programação é uma disciplina prática. São as horas de código que
            vão te preparar e dar a experiência necessária para tomar as
            melhores decisões no mundo real.
          </p>
        </div>

        <div>
          <img src={free} alt="" />

          <h3>Grátis</h3>
          <p>
            Platoforma totalmente gratuita com a melhor curadoria de estudos,
            com as tecnologias mais atuais que vão te colocar no mercado de
            trabalho.
          </p>
        </div>
      </Section>
    </>
  );
};

export default WhyDevPath;
