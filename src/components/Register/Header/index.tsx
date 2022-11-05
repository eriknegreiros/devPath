import { Link } from "react-router-dom";
import logo from "../../../Assets/logo.svg";

import { HeaderStyles } from "./styles";

const Header = () => {
  return (
    <HeaderStyles>
      <img src={logo} alt="logo" />
      <section className="buttonsHeader">
        <Link className="link" to="/">
          Voltar
        </Link>
        <div className="namePage">Cadastro</div>
      </section>
    </HeaderStyles>
  );
};

export default Header;
