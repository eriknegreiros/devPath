import frontEnd from "../../Assets/frontend-line-basic.png"
import {ContainerMain} from "./style"

const DashboardContents = () => {
    return (

        
       <ContainerMain>
        <aside>
        <h2>Front-End</h2>
        <p>Nnivél Básico</p>
        </aside>


        <ul>
            <img src={ frontEnd } alt="Linha do Tempo tecnologias" />
            <li className="CardTech">
                <h3>Introdução ao IDE</h3>
                <p>Introdução ao ambiente de desenvolvimento (Visual Studio Code)</p>
            </li>
           
            <li className="CardTech">
                <h3>Importancia da Documentação</h3>
                <p>Antes de qualquer coisa, precisamos entender a importancia da documentação na nossa profissão  Antes de qualquer coisa, precisamos entender a importancia da documentação na nossa profissão  </p>
            </li>

        </ul>

       </ContainerMain>
    )
}
export default DashboardContents