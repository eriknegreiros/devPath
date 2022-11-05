import { useState } from "react";
import HeaderDashboard from "../../components/Dashboard/HeaderDashboard";
import TitleTechDashboard from "../../components/Dashboard/TitleTech";
import { CardTechStyled } from "../../components/Dashboard/CardTechs/style";
import Footer from "../../components/Footer";
import ModalContents from "../../components/Dashboard/ModalContents";
import frontEndBasic from "../../Assets/frontend-line-basic.png";
import { ContainerMain } from "./style";

const DashboardFrontBasic = () => {
  const [modal, setModal] = useState<boolean>(false);

  function modalContents(e: any) {
    e.preventDefault();
    setModal(true);
  }
  return (
    <>
      <HeaderDashboard />

      <ContainerMain>
        <TitleTechDashboard>
          <h2>Front-End</h2>
          <p>Nivél Básico</p>
          <span>Início</span>
        </TitleTechDashboard>

        <ul>
          <CardTechStyled onClick={modalContents}>
            <h3>Introdução ao IDE</h3>
            <p>
              Introdução ao ambiente de desenvolvimento (Visual Studio Code)
            </p>
          </CardTechStyled>

          <CardTechStyled onClick={modalContents}>
            <h3>Importancia da Documentação</h3>
            <p>
              Antes de qualquer coisa, precisamos entender a importancia da
              documentação na nossa profissão Antes de qualquer coisa,
              precisamos entender a importancia da documentação na nossa
              profissão
            </p>
          </CardTechStyled>

          <CardTechStyled onClick={modalContents}>
            <h3>HTML5</h3>
            <p>
              Os desenvolvedores usam códigos HTML para projetar como um
              navegador vai exibir os elementos das páginas, como textos,
              hiperlinks e arquivos de mídia.
            </p>
          </CardTechStyled>

          <CardTechStyled onClick={modalContents}>
            <h3>CSS3</h3>
            <p>
              O CSS separa o conteúdo da representação visual do site. Pense na
              decoração da sua página.
            </p>
          </CardTechStyled>

          <CardTechStyled onClick={modalContents}>
            <h3>Introdução ao JavaScript</h3>
            <p>
              Antes de qualquer coisa, precisamos entender a importancia da
              documentação na nossa profissão Antes de qualquer coisa,
              precisamos entender a importancia da documentação na nossa
              profissão
            </p>
          </CardTechStyled>
        </ul>
        <img src={frontEndBasic} alt="Linha do Tempo tecnologias" />
      </ContainerMain>

      <Footer />
      {modal ? <ModalContents /> : <></>}
    </>
  );
};
export default DashboardFrontBasic;
