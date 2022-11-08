import { useContext, useState } from "react";
import TitleTechDashboard from "../TitleTech";
import { CardTechStyled } from "../CardTechs/style";
import ModalContents from "../ModalContents";
import frontEndBasic from "../../../Assets/frontend-line-basic.png";
import { ContainerMain } from "./style";
import GlobalModal from "../../Modal";

const DashboardFrontBasic = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpen2, setIsOpen2] = useState<boolean>(false);
  const [isOpen3, setIsOpen3] = useState<boolean>(false);
  const [isOpen4, setIsOpen4] = useState<boolean>(false);
  const [isOpen5, setIsOpen5] = useState<boolean>(false);

  return (
    <>
      <ContainerMain>
        <TitleTechDashboard>
          <h2>Front-End</h2>
          <p>Nivél Básico</p>
          <span>Início</span>
        </TitleTechDashboard>

        <ul>
          <CardTechStyled id="1" onClick={() => setIsOpen(true)}>
            <h3>Introdução ao IDE</h3>
            <p>
              Introdução ao ambiente de desenvolvimento (Visual Studio Code)
            </p>
          </CardTechStyled>

          <CardTechStyled id="2" onClick={() => setIsOpen2(true)}>
            <h3>Importancia da Documentação</h3>
            <p>
              Antes de qualquer coisa, precisamos entender a importancia da
              documentação na nossa profissão Antes de qualquer coisa,
              precisamos entender a importancia da documentação na nossa
              profissão
            </p>
          </CardTechStyled>

          <CardTechStyled id="3" onClick={() => setIsOpen3(true)}>
            <h3>HTML5</h3>
            <p>
              Os desenvolvedores usam códigos HTML para projetar como um
              navegador vai exibir os elementos das páginas, como textos,
              hiperlinks e arquivos de mídia.
            </p>
          </CardTechStyled>

          <CardTechStyled id="4" onClick={() => setIsOpen4(true)}>
            <h3>CSS3</h3>
            <p>
              O CSS separa o conteúdo da representação visual do site. Pense na
              decoração da sua página.
            </p>
          </CardTechStyled>

          <CardTechStyled id="5" onClick={() => setIsOpen5(true)}>
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
      {isOpen ? (
        <GlobalModal title="Introdução ao IDE" onClose={() => setIsOpen(false)}>
          <ul>
            <li>Software para Baixar</li>
            <li>Dicas Visual Studio Code</li>
          </ul>
        </GlobalModal>
      ) : null}

      {isOpen2 ? (
        <GlobalModal
          title="Importancia da Documentação"
          onClose={() => setIsOpen2(false)}
        >
          <ul>
            <li>Como a documentação pode ajudar no aprendizado!</li>
            <li>A importância da documentação</li>
            <li>
              Técnica que uso pra aprender qualquer linguagem de programação
            </li>
          </ul>
        </GlobalModal>
      ) : null}
      {isOpen3 ? (
        <GlobalModal title="HTML5" onClose={() => setIsOpen3(false)}>
          <ul>
            <li>Software para Baixar</li>
            <li>Dicas Visual Studio Code</li>
          </ul>
        </GlobalModal>
      ) : null}
      {isOpen4 ? (
        <GlobalModal title="CSS3" onClose={() => setIsOpen4(false)}>
          <ul>
            <li>Software para Baixar</li>
            <li>Dicas Visual Studio Code</li>
          </ul>
        </GlobalModal>
      ) : null}
      {isOpen5 ? (
        <GlobalModal
          title="Introdução ao JavaScript"
          onClose={() => setIsOpen5(false)}
        />
      ) : null}

      {modal ? <ModalContents /> : <></>}

    </>
  );
};
export default DashboardFrontBasic;
