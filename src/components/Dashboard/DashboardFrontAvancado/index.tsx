import { useState } from "react";
import { CardTechStyled } from "../CardTechs/style";

import TitleTech from "../TitleTech";
import { ContainerMain } from "../DashboardFrontBasic/style";
import { UlStyledAvancado } from "./style";
import frontEndAvancado from "../../../Assets/frontend-line-avancado.png";

import GlobalModal from "../../Modal";
import React from "../../ContentsToModal/FrontEndAdvanced/React";
import Career from "../../ContentsToModal/FrontEndAdvanced/Career";
import TypeScript from "../../ContentsToModal/FrontEndAdvanced/TypeScript";
import Libs from "../../ContentsToModal/FrontEndAdvanced/Libs";

const DashboardFrontAvancado = () => {
  const [reactIsOpen, setReactIsOpen] = useState<boolean>(false);
  const [libsIsOpen, setLibsIsOpen] = useState<boolean>(false);
  const [tsIsOpen, setTsIsOpen] = useState<boolean>(false);
  const [careerIsOpen, setCareerIsOpen] = useState<boolean>(false);

  return (
    <>
      <ContainerMain>
        <TitleTech>
          <h2>Front-End</h2>
          <p>Nível Avançado</p>
          <span>Início</span>
        </TitleTech>

        <UlStyledAvancado>
          <CardTechStyled
            className="cardAdvanced"
            onClick={() => setReactIsOpen(true)}
          >
            <h3>React</h3>
            <p>
              O React é uma biblioteca front-end JavaScript de código aberto com
              foco em criar interfaces de usuário em páginas web.O React é uma
              biblioteca front-end JavaScript de código aberto com foco em criar
              interfaces de usuário em páginas web.
            </p>
          </CardTechStyled>

          <CardTechStyled onClick={() => setLibsIsOpen(true)}>
            <h3>Bibliotecas (React)</h3>
            <p>
              O React tem algumas bibliotecas que facilitam o desenvolvimento
              web, como o UI/UX, formulário, rotas e etc.O React tem algumas
              bibliotecas que facilitam o desenvolvimento web, como o UI/UX,
              formulário, rotas e etc.
            </p>
          </CardTechStyled>

          <CardTechStyled
            className="cardAdvanced"
            onClick={() => setTsIsOpen(true)}
          >
            <h3 className="typeScriptAdjust">TypeScript</h3>
            <p className="typeScriptAdjustP">
              Podemos considerar o Typescript como um potencializador da
              linguagem Javascript. Ele permite que grandes sistemas complexos
              sejam construídos.Podemos considerar o Typescript como um
              potencializador da linguagem Javascript. Ele permite que grandes
              sistemas complexos sejam construídos.
            </p>
          </CardTechStyled>

          <CardTechStyled onClick={() => setCareerIsOpen(true)}>
            <h3 className="carrerAjustCss">Carreira</h3>
            <p>
              As melhores dicas que vão aumentar as suas chances de conquistar a
              sua primeira vaga como desenvolvedor.
            </p>
          </CardTechStyled>
        </UlStyledAvancado>

        <img src={frontEndAvancado} alt="Linha do Tempo tecnologias" />
      </ContainerMain>

      {reactIsOpen ? (
        <GlobalModal title="React" onClose={() => setReactIsOpen(false)}>
          <React />
        </GlobalModal>
      ) : null}

      {libsIsOpen ? (
        <GlobalModal
          title="Bibliotecas (React)"
          onClose={() => setLibsIsOpen(false)}
        >
          <Libs />
        </GlobalModal>
      ) : null}

      {tsIsOpen ? (
        <GlobalModal title="TypeScript" onClose={() => setTsIsOpen(false)}>
          <TypeScript />
        </GlobalModal>
      ) : null}

      {careerIsOpen ? (
        <GlobalModal title="Carreira" onClose={() => setCareerIsOpen(false)}>
          <Career />
        </GlobalModal>
      ) : null}
    </>
  );
};
export default DashboardFrontAvancado;

