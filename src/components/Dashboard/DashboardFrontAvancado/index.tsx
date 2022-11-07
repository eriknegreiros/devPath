import { useState } from "react";


import { CardTechStyled } from "../CardTechs/style";

import TitleTech from "../TitleTech";
import { ContainerMain } from "../DashboardFrontBasic/style";
import { UlStyledAvancado } from "./style";
import frontEndAvancado from "../../../Assets/frontend-line-avancado.png";
import ModalContents from "../ModalContents";


const DashboardFrontAvancado = () => {
  const [modal, setModal] = useState<boolean>(false);

  function modalContents(e: any) {
    e.preventDefault();
    setModal(true);
  }
  return (
    <>
      

      <ContainerMain>
        <TitleTech>
          <h2>Front-End</h2>
          <p>Nivél Avançado</p>
          <span>Início</span>
        </TitleTech>

        <UlStyledAvancado>
          <CardTechStyled className="cardAjuste" onClick={modalContents}>
            <h3>React</h3>
            <p>
              O React é uma biblioteca front-end JavaScript de código aberto com
              foco em criar interfaces de usuário em páginas web.O React é uma
              biblioteca front-end JavaScript de código aberto com foco em criar
              interfaces de usuário em páginas web.
            </p>
          </CardTechStyled>

          <CardTechStyled onClick={modalContents}>
            <h3>Bibliotecas (React)</h3>
            <p>
              O React tem algumas bibliotecas que facilitam o desenvolvimento
              web, como o UI/UX, formulário, rotas e etc.O React tem algumas
              bibliotecas que facilitam o desenvolvimento web, como o UI/UX,
              formulário, rotas e etc.
            </p>
          </CardTechStyled>

          <CardTechStyled className="cardAjuste" onClick={modalContents}>
            <h3>TypeScript</h3>
            <p>
              Podemos considerar o Typescript como um potencializador da
              linguagem Javascript. Ele permite que grandes sistemas complexos
              sejam construídos.Podemos considerar o Typescript como um
              potencializador da linguagem Javascript. Ele permite que grandes
              sistemas complexos sejam construídos.
            </p>
          </CardTechStyled>

          <CardTechStyled onClick={modalContents}>
            <h3>Carreira</h3>
            <p>
              As melhores dicas que vão aumentar as suas chances de conquistar a
              sua primeira vaga como desenvolvedor.
            </p>
          </CardTechStyled>
        </UlStyledAvancado>

        <img src={frontEndAvancado} alt="Linha do Tempo tecnologias" />
      </ContainerMain>



      {modal ? <ModalContents /> : <></>}
    </>
  );
};
export default DashboardFrontAvancado;
