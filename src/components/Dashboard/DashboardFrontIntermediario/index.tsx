import { useState } from "react";
import TitleTechDashboard from "../TitleTech";
import frontEndIntermediario from "../../../Assets/frontend-line-intermediario.png";
import { CardTechStyled } from "../CardTechs/style";
import { UlStyle } from "./style";
import { ContainerMain } from "../DashboardFrontBasic/style";

import GlobalModal from "../../Modal";
import Array from "../../ContentsToModal/FrontEndIntermediary/Array";
import Function from "../../ContentsToModal/FrontEndIntermediary/Function";
import Api from "../../ContentsToModal/FrontEndIntermediary/Api";

const DashboardFrontIntermediario = () => {
  const [arrayIsOpen, setArrayIsOpen] = useState<boolean>(false);
  const [functionIsOpen, setFunctionIsOpen] = useState<boolean>(false);
  const [apiIsOpen, setApiIsOpen] = useState<boolean>(false);

  return (
    <>
      <ContainerMain>
        <TitleTechDashboard>
          <h2>Front-End</h2>
          <p>Nível Intermediário</p>
          <span>Início</span>
        </TitleTechDashboard>

        <UlStyle>
          <CardTechStyled
            className="cardIntermediary"
            onClick={() => setArrayIsOpen(true)}
          >
            <h3>Métodos de array </h3>
            <p>
              Os métodos são as principais ferramentas para manipulação e
              interação com o array, e é muito importante domina-los.
            </p>
          </CardTechStyled>

          <CardTechStyled onClick={() => setFunctionIsOpen(true)}>
            <h3 >Funções Assíncronas</h3>
            <p >
              funções assíncronas são uma espécie de Promise, pois condicionam a
              sua execução na espera de alguns retornos, onde utilizamos a
              expressão await
            </p>
          </CardTechStyled>

          <CardTechStyled
            className="cardIntermediary"
            onClick={() => setApiIsOpen(true)}
          >
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

      {arrayIsOpen ? (
        <GlobalModal
          title="Métodos de array"
          onClose={() => setArrayIsOpen(false)}
        >
          <Array />
        </GlobalModal>
      ) : null}

      {functionIsOpen ? (
        <GlobalModal
          title="Funções Assíncronas"
          onClose={() => setFunctionIsOpen(false)}
        >
          <Function />
        </GlobalModal>
      ) : null}

      {apiIsOpen ? (
        <GlobalModal title="API" onClose={() => setApiIsOpen(false)}>
          <Api />
        </GlobalModal>
      ) : null}
    </>
  );
};
export default DashboardFrontIntermediario;
