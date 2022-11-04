import HeaderDashboard from "../../../Components/Dashboard/HeaderDashboard";
import Footer from "../../../Components/Footer";
import { Main } from "./style";
import { Link } from "react-router-dom";
import logic from "../../../Assets/logic.png";
import front from "../../../Assets/front.png";
import back from "../../../Assets/back.png";

const SelectTask = () => {
  return (
    <>
      <HeaderDashboard />
      <Main>
        <div>
          <h5>Bem vindo, nomedoDev!</h5>
          <h5>O que quer aprender hoje?</h5>
        </div>

        <Link to="">
          <img src={logic} alt="imagem de lógica" />
          <p>Lógica de programação</p>
        </Link>

        <Link to="">
          <img src={front} alt="imagem de lógica" />
          <p>Desenvolvimento Front-End</p>
        </Link>

        <Link to="">
          <img src={back} alt="imagem de lógica" />
          <p>Desenvolvimento Back-End</p>
        </Link>
      </Main>
      <Footer />
    </>
  );
};

export default SelectTask;