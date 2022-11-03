import { DivText, Card, Section } from "./style";
import money from "../../../Assets/money.png";
import graphic from "../../../Assets/graphic.png";
import pc from "../../../Assets/pc.png";
import correct from "../../../Assets/correct.png";
import brain from "../../../Assets/brain.png";
import inovation from "../../../Assets/inovation.png";

const CardsStudy = () => {
  return (
    <>
      <Section>
        <DivText>
          <h2>Por que estudar programação?</h2>
        </DivText>

        <Card>
          <div>
            <img src={graphic} alt="" />
            <p>Mercado em Alta</p>
          </div>

          <div>
            <img src={money} alt="" />
            <p>Altos Sálarios</p>
          </div>

          <div>
            <img src={pc} alt="" />
            <p>Flexibilidade</p>
          </div>

          <div>
            <img src={correct} alt="" />
            <p>Resolução de Problemas</p>
          </div>

          <div>
            <img src={brain} alt="" />
            <p>Estimular a Criatividade</p>
          </div>

          <div>
            <img src={inovation} alt="" />
            <p>Tirar ideias do papel</p>
          </div>
        </Card>
      </Section>
    </>
  );
};

export default CardsStudy;
