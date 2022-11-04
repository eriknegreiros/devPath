import { useState } from "react";
import HeaderDashboard from "../../Components/Dashboard/HeaderDashboard";
import TitleTechDashboard from "../../Components/Dashboard/TitleTech";
import Footer from "../../Components/Footer";
import frontEndIntermediario from "../../Assets/frontend-line-intermediario.png";
import { CardTechStyled } from "../../Components/Dashboard/CardTechs/style";
import { UlStyle } from "../../pages/DashboardFrontIntermediario/style";
import { ContainerMain } from "../DashboardFrontBasic/style";
import ModalContents from "../../Components/Dashboard/ModalContents";

const DashboardFrontIntermediario = () => {
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
          <p>Nivél Intermediário</p>
          <span>Início</span>
        </TitleTechDashboard>

        <UlStyle>
          <CardTechStyled className="cardAjuste" onClick={modalContents}>
            <h3>Métodos de array </h3>
            <p>
              Os métodos são as principais ferramentas para manipulação e
              interação com o array, e é muito importante domina-los.
            </p>
          </CardTechStyled>

          <CardTechStyled onClick={modalContents}>
            <h3>Funções Assíncronas</h3>
            <p>
              funções assíncronas são uma espécie de Promise, pois condicionam a
              sua execução na espera de alguns retornos, onde utilizamos a
              expressão await
            </p>
          </CardTechStyled>

          <CardTechStyled className="cardAjuste" onClick={modalContents}>
            <h3>API</h3>
            <p>
              As APIs são um tipo de “ponte” que conectam aplicações, podendo
              ser utilizadas para os mais variados tipos de negócio, por
              empresas de diversos nichos de mercado ou tamanho.
            </p>
          </CardTechStyled>
        </UlStyle>
        <img src={frontEndIntermediario} alt="Linha do Tempo tecnologias" />
      </ContainerMain>

      <Footer />
      {modal ? <ModalContents /> : <></>}
    </>
  );
};
export default DashboardFrontIntermediario;