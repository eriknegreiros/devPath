import {useState} from "react"
import { CardTechStyled } from "../../Components/Dashboard/CardTechs/style";
import { ContainerMain } from "../../Components/Dashboard/DashboardFrontBasic/style";
import HeaderDashboard from "../../Components/Dashboard/HeaderDashboard";
import TitleTechDashboard from "../../Components/Dashboard/TitleTech";
import logicaProgramacao from "../../Assets/line-logicaProgramacao.png";
import Footer from "../../Components/Footer";
import { UlLogicaProgramacao } from "./style";
import ModalContents from "../../Components/Dashboard/ModalContents";


const DashboardLogicaProgramacao = () => {

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
            <h2>Lógica de Programação</h2>
            <span>Início</span>
        </TitleTechDashboard>

        <UlLogicaProgramacao>
            
            <CardTechStyled className="cardAjuste"  onClick={modalContents}>
            <h3>Blogs</h3>
            <p>Os melhores conteúdos que irão te introduzir o assunto de lógica de programação.</p>
            </CardTechStyled>

            <CardTechStyled onClick={modalContents}>
            <h3>Cursos e vídeos</h3>
            <p>Selecionamos alguns cursos e vídeos que vão direto ao ponto e te ensinam lógica de programação, desde o básico até o avançado.</p>
            </CardTechStyled>

            <CardTechStyled className="cardAjuste " onClick={modalContents}>
            <h3>Desafios</h3>
            <p>Separamos algumas plataformas que irão te levar a outro nivel com muita prática no seu aprendizado.</p>
            </CardTechStyled>


            <img src={logicaProgramacao} alt="Linha do Tempo tecnologias" />
        </UlLogicaProgramacao>

      </ContainerMain>

    <Footer />{
console.log(modal)}
    {modal ? <ModalContents /> : <></>}
    </>
  );
};
export default DashboardLogicaProgramacao;
