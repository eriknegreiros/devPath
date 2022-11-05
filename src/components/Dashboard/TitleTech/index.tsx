import { ReactNode } from "react";
import { TitleStyled } from "./style";

interface IProps {
  children: ReactNode;
}

const TitleTechDashboard = ({ children }: IProps) => (
  <TitleStyled>{children}</TitleStyled>
);
export default TitleTechDashboard;
