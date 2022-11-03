import { Link } from "react-router-dom";
import { Header } from "./style";

const HeaderMenu = () => {
  return (
    <>
      <Header>
        <h1>DevPath</h1>
        <li>
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/quemSomos">
            {" "}
            <p>Quem Somos</p>
          </Link>
          <p>Login</p>
          <Link to="/signUp">
            {" "}
            <p>Cadastro</p>
          </Link>
        </li>
      </Header>
    </>
  );
};

export default HeaderMenu;
