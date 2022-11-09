import { useState } from "react";
import { CardTechStyled } from "../../components/Dashboard/CardTechs/style";
import { ContainerMain } from "../../components/Dashboard/DashboardFrontBasic/style";
import HeaderDashboard from "../../components/Dashboard/HeaderDashboard";
import TitleTechDashboard from "../../components/Dashboard/TitleTech";
import logicaProgramacao from "../../Assets/line-logicaProgramacao.png";
import Footer from "../../components/Footer";
import { UlLogicaProgramacao } from "./style";
import ModalContents from "../../components/Dashboard/ModalContents";
import { motion } from "framer-motion";

const DashboardLogicaProgramacao = () => {
  const [modal, setModal] = useState<boolean>(false);

  function modalContents(e: any) {
    e.preventDefault();
    setModal(true);
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <HeaderDashboard />

        <ContainerMain>
          <TitleTechDashboard>
            <h2>Lógica de Programação</h2>
            <span>Início</span>
          </TitleTechDashboard>

          <UlLogicaProgramacao>
            <CardTechStyled className="cardAjuste" onClick={modalContents}>
              <h3>Blogs</h3>
              <p>
                Os melhores conteúdos que irão te introduzir o assunto de lógica
                de programação.
              </p>
            </CardTechStyled>

            <CardTechStyled onClick={modalContents}>
              <h3>Cursos e vídeos</h3>
              <p>
                Selecionamos alguns cursos e vídeos que vão direto ao ponto e te
                ensinam lógica de programação, desde o básico até o avançado.
              </p>
            </CardTechStyled>

            <CardTechStyled className="cardAjuste " onClick={modalContents}>
              <h3>Desafios</h3>
              <p>
                Separamos algumas plataformas que irão te levar a outro nivel
                com muita prática no seu aprendizado.
              </p>
            </CardTechStyled>

            <img src={logicaProgramacao} alt="Linha do Tempo tecnologias" />
          </UlLogicaProgramacao>
        </ContainerMain>

        <Footer />
        {modal ? <ModalContents /> : <></>}
      </motion.div>
    </>
  );
};
export default DashboardLogicaProgramacao;
