import HeaderDashboard from "../../../Components/Dashboard/HeaderDashboard";
import Footer from "../../../Components/Footer";
import { Main } from "./style";
import { Link } from "react-router-dom";
import logic from "../../../Assets/logic.png";
import front from "../../../Assets/front.png";
import back from "../../../Assets/back.png";
import { motion } from "framer-motion";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

const SelectTask = () => {
  const { profile } = useContext(UserContext);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <HeaderDashboard />
        <Main>
          <div>
            <h5>Bem vindo, {profile?.name}!</h5>
            <h5>O que quer aprender hoje?</h5>
          </div>

          <Link to="/logicaprogramacao">
            <img src={logic} alt="imagem de lógica" />
            <p>Lógica de programação</p>
          </Link>

          <Link to="/dashboard/frontEnd">
            <img src={front} alt="imagem de lógica" />
            <p>Desenvolvimento Front-End</p>
          </Link>

          <Link to="">
            <img src={back} alt="imagem de lógica" />
            <p>Desenvolvimento Back-End</p>
          </Link>
        </Main>
        <Footer />
      </motion.div>
    </>
  );
};

export default SelectTask;
