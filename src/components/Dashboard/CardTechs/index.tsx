import { ReactNode } from "react"
import { CardTechStyled } from "./style"

interface IProps{
    children: ReactNode
}

const CardTechs = ({children}: IProps) => (
    <CardTechStyled>
        {children}
    </CardTechStyled>
)
export default CardTechs