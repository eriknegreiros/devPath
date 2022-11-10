import { useState } from "react";
import TitleTechDashboard from "../TitleTech";
import { CardTechStyled } from "../CardTechs/style";
import frontEndBasic from "../../../Assets/frontend-line-basic.png";
import { ContainerMain } from "./style";
import GlobalModal from "../../Modal";
import Css3 from "../../ContentsToModal/FrontEndBasic/Css3";
import Ide from "../../ContentsToModal/FrontEndBasic/Ide";
import Documentacao from "../../ContentsToModal/FrontEndBasic/Documentacao";
import IntroJavaScript from "../../ContentsToModal/FrontEndBasic/IntroJavaScript";
import Html5 from "../../ContentsToModal/FrontEndBasic/Html5";

const DashboardFrontBasic = () => {
  const [ideIsOpen, setIdeIsOpen] = useState<boolean>(false);
  const [docIsOpen, setDocIsOpen] = useState<boolean>(false);
  const [htmlIsOpen, setHtmlIsOpen] = useState<boolean>(false);
  const [cssIsOpen, setCssIsOpen] = useState<boolean>(false);
  const [jsIsOpen, setJsIsOpen] = useState<boolean>(false);

  return (
    <>


      <ContainerMain>
        <TitleTechDashboard>
          <h2>Front-End</h2>
          <p>Nível Básico</p>
          <span>Início</span>
        </TitleTechDashboard>

        <ul>
          <CardTechStyled className="frontEndBasic" id="1" onClick={() => setIdeIsOpen(true)}>
            <h3>Introdução ao IDE</h3>
            <p>
              Introdução ao ambiente de desenvolvimento (Visual Studio Code)
            </p>
          </CardTechStyled>

          <CardTechStyled className="frontEndBasic2" id="2" onClick={() => setDocIsOpen(true)}>
            <h3>Importancia da Documentação</h3>
            <p>
              Antes de qualquer coisa, precisamos entender a importancia da
              documentação na nossa profissão Antes de qualquer coisa,
              precisamos entender a importancia da documentação na nossa
              profissão
            </p>
          </CardTechStyled>

          <CardTechStyled className="frontEndBasic" id="3" onClick={() => setHtmlIsOpen(true)}>
            <h3>HTML5</h3>
            <p>
              Os desenvolvedores usam códigos HTML para projetar como um
              navegador vai exibir os elementos das páginas, como textos,
              hiperlinks e arquivos de mídia.
            </p>
          </CardTechStyled>

          <CardTechStyled className="frontEndBasic2" id="4" onClick={() => setCssIsOpen(true)}>
            <h3>CSS3</h3>
            <p>
              O CSS separa o conteúdo da representação visual do site. Pense na
              decoração da sua página.
            </p>
          </CardTechStyled>

          <CardTechStyled className="frontEndBasic" id="5" onClick={() => setJsIsOpen(true)}>
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

      {ideIsOpen ? (
        <GlobalModal
          title="Introdução ao IDE"
          onClose={() => setIdeIsOpen(false)}
        >
          <Ide />
        </GlobalModal>
      ) : null}

      {docIsOpen ? (
        <GlobalModal
          title="Importancia da Documentação"
          onClose={() => setDocIsOpen(false)}
        >
          <Documentacao />
        </GlobalModal>
      ) : null}

      {htmlIsOpen ? (
        <GlobalModal title="HTML5" onClose={() => setHtmlIsOpen(false)}>
          <Html5 />
        </GlobalModal>
      ) : null}

      {cssIsOpen ? (
        <GlobalModal title="CSS3" onClose={() => setCssIsOpen(false)}>
          <Css3 />
        </GlobalModal>
      ) : null}

      {jsIsOpen ? (
        <GlobalModal
          title="Introdução ao JavaScript"
          onClose={() => setJsIsOpen(false)}
        >
          <IntroJavaScript />
        </GlobalModal>
      ) : null}
    </>
  );
};
export default DashboardFrontBasic;
