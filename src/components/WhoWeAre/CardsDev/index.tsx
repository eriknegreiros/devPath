import { Main, DivText } from "./style";
import erik from "../../../Assets/devs/erik.png";
import Elipse2 from "../../../Assets/devs/Ellipse 2.png";
import Elipse3 from "../../../Assets/devs/Ellipse 3.png";
import Elipse4 from "../../../Assets/devs/Ellipse 4.png";
import Elipse5 from "../../../Assets/devs/Ellipse 5.png";
import Elipse6 from "../../../Assets/devs/Ellipse 6.png";
import Elipse7 from "../../../Assets/devs/Ellipse 7.png";
import linkedin from "../../../Assets/linkedin.png";
import github from "../../../Assets/github.png";

const CardsDev = () => {
  return (
    <>
      <DivText>
        <h2>O time por trás do projeto!</h2>
      </DivText>
      <Main>
        <div>
          <img className="user" src={erik} alt="" />
          <h3>Erik Negreiros</h3>
          <p>Tech Lead</p>
          <div className="linkedin">
            <img src={linkedin} alt="" />
            <p>eriknegreiros</p>
          </div>
          <div className="github">
            <img src={github} alt="" />
            <p>eriknegreiros</p>
          </div>
        </div>

        <div>
          <img className="user" src={Elipse2} alt="" />
          <h3>Rikelly Mendes</h3>
          <p>Scrum Master</p>
          <div className="linkedin">
            <img src={linkedin} alt="" />
            <p>rikellyh</p>
          </div>
          <div className="github">
            <img src={github} alt="" />
            <p>rikellyh</p>
          </div>
        </div>

        <div>
          <img className="user" src={Elipse3} alt="" />
          <h3>Petrus Lobato</h3>
          <p>Product Owner</p>
          <div className="linkedin">
            <img src={linkedin} alt="" />
            <p>petruslobato</p>
          </div>
          <div className="github">
            <img src={github} alt="" />
            <p>PetrusLobato</p>
          </div>
        </div>

        <div>
          <img className="user" src={Elipse4} alt="" />
          <h3>Larissa Schmillevitch</h3>
          <p>Quality Assurance</p>
          <div className="linkedin">
            <img src={linkedin} alt="" />
            <p>larissa-schmillevitch</p>
          </div>
          <div className="github">
            <img src={github} alt="" />
            <p>LarissaSchmillevitch</p>
          </div>
        </div>

        <div>
          <img className="user" src={Elipse5} alt="" />
          <h3>Daniel Lobato</h3>
          <p>Quality Assurance</p>
          <div className="linkedin">
            <img src={linkedin} alt="" />
            <p>simplesmentedan</p>
          </div>
          <div className="github">
            <img src={github} alt="" />
            <p>simplesmentedan</p>
          </div>
        </div>

        <div>
          <img className="user" src={Elipse7} alt="" />
          <h3>Cauê Santos</h3>
          <p>Quality Assurance</p>
          <div className="linkedin">
            <img src={linkedin} alt="" />
            <p>cauedossantos</p>
          </div>
          <div className="github">
            <img src={github} alt="" />
            <p>caue-santg </p>
          </div>
        </div>

        <div>
          <img className="user" src={Elipse6} alt="" />
          <h3>Pedro Cruz</h3>
          <p>Quality Assurance</p>
          <div className="linkedin">
            <img src={linkedin} alt="" />
            <p>pedro-cruz-0b114922a</p>
          </div>
          <div className="github">
            <img src={github} alt="" />
            <p>byPedroCruzDev</p>
          </div>
        </div>
      </Main>
    </>
  );
};

export default CardsDev;
