import { Link } from "react-router-dom";
import logo from "../../../Assets/logo.svg";

import { HeaderStyles } from "./styles";

const Header = ({ name }: any) => {
  return (
    <HeaderStyles>
      <img src={logo} alt="logo" />
      <section className="buttonsHeader">
        {/* // <Link className="link" to="/">
        //   Voltar
        // </Link>
        // <div className="namePage">Cadastro</div> */}

        <Link className="link" to="/">
          Voltar
        </Link>
        <div className="namePage">{name}</div>
      </section>
    </HeaderStyles>
  );
};

export default Header;
