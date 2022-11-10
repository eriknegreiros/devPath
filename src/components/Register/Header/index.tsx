import { Link } from "react-router-dom";

import { HeaderStyles } from "./styles";

const Header = ({ name }: any) => {
  return (
    <HeaderStyles>
      <h1>DevPath</h1>
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
