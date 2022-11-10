import { useState } from "react";
import { CardTechStyled } from "../../Components/Dashboard/CardTechs/style";
import { ContainerMain } from "../../Components/Dashboard/DashboardFrontBasic/style";
import HeaderDashboard from "../../Components/Dashboard/HeaderDashboard";
import TitleTechDashboard from "../../Components/Dashboard/TitleTech";
import logicaProgramacao from "../../Assets/line-logicaProgramacao.png";
import Footer from "../../Components/Footer";
import { UlLogicaProgramacao } from "./style";
import { motion } from "framer-motion";

import GlobalModal from "../../Components/Modal";
import Challenges from "../../Components/ContentsToModal/LogicaProgramacao/Challenges";
import Courses from "../../Components/ContentsToModal/LogicaProgramacao/Courses";
import Blogs from "../../Components/ContentsToModal/LogicaProgramacao/Blogs";

const DashboardLogicaProgramacao = () => {
  const [blogsIsOpen, setBlogsIsOpen] = useState<boolean>(false);
  const [coursesIsOpen, setCoursesIsOpen] = useState<boolean>(false);
  const [challengesIsOpen, setChallengesIsOpen] = useState<boolean>(false);

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
            <CardTechStyled
              className="cardLogica"
              onClick={() => setBlogsIsOpen(true)}
            >
              <h3>Blogs</h3>
              <p>
                Os melhores conteúdos que irão te introduzir o assunto de lógica
                de programação.
              </p>
            </CardTechStyled>

            <CardTechStyled onClick={() => setCoursesIsOpen(true)}>
              <h3>Cursos e vídeos</h3>
              <p>
                Selecionamos alguns cursos e vídeos que vão direto ao ponto e te
                ensinam lógica de programação, desde o básico até o avançado.
              </p>
            </CardTechStyled>

            <CardTechStyled
              className="cardLogica "
              onClick={() => setChallengesIsOpen(true)}
            >
              <h3>Desafios</h3>
              <p>
                Separamos algumas plataformas que irão te levar a outro nivel
                com muita prática no seu aprendizado.
              </p>
            </CardTechStyled>

            <img className="imgLogicaProgramacao" src={logicaProgramacao} alt="Linha do Tempo tecnologias" />
          </UlLogicaProgramacao>
        </ContainerMain>

        <Footer />

        {blogsIsOpen ? (
          <GlobalModal title="Blogs" onClose={() => setBlogsIsOpen(false)}>
            <Blogs />
          </GlobalModal>
        ) : null}

        {coursesIsOpen ? (
          <GlobalModal
            title="Cursos e vídeos"
            onClose={() => setCoursesIsOpen(false)}
          >
            <Courses />
          </GlobalModal>
        ) : null}

        {challengesIsOpen ? (
          <GlobalModal
            title="Desafios"
            onClose={() => setChallengesIsOpen(false)}
          >
            <Challenges />
          </GlobalModal>
        ) : null}
      </motion.div>
    </>
  );
};
export default DashboardLogicaProgramacao;
