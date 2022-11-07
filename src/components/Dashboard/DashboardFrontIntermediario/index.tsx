import { useState } from "react";
<<<<<<< HEAD:src/pages/DashboardFrontIntermediario/index.tsx
import HeaderDashboard from "../../components/Dashboard/HeaderDashboard";
import TitleTechDashboard from "../../components/Dashboard/TitleTech";
import Footer from "../../components/Footer";
import frontEndIntermediario from "../../Assets/frontend-line-intermediario.png";
import { CardTechStyled } from "../../components/Dashboard/CardTechs/style";
import { UlStyle } from "../../pages/DashboardFrontIntermediario/style";
import { ContainerMain } from "../DashboardFrontBasic/style";
import ModalContents from "../../components/Dashboard/ModalContents";
=======
import TitleTechDashboard from "../TitleTech";
import frontEndIntermediario from "../../../Assets/frontend-line-intermediario.png";
import { CardTechStyled } from "../CardTechs/style";
import { UlStyle } from "./style";
import { ContainerMain } from "../DashboardFrontBasic/style";
import ModalContents from "../ModalContents";
>>>>>>> 729e92fd9fe8dcd36d8553239a3ca453494e0dc0:src/components/Dashboard/DashboardFrontIntermediario/index.tsx

const DashboardFrontIntermediario = () => {
  const [modal, setModal] = useState<boolean>(false);

  function modalContents(e: any) {
    e.preventDefault();
    setModal(true);
  }
  return (
    <>
      

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

     
      {modal ? <ModalContents /> : <></>}
    </>
  );
};
export default DashboardFrontIntermediario;
