import { Button, ContainerLogin } from "./style";
import login from "../../assets/login.svg";

import PasswordInput from "../../components/passwordVisibilte";
import EmailInput from "../../components/emailInput";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <ContainerLogin>
      <header>
        <div>
          <h1>DevPath</h1>
        </div>
        <nav>
          <Link className="buttonLink" to="/register">
            Cadastrar-se
          </Link>
          <Link className="buttonLink" to="/">
            Login
          </Link>
        </nav>
      </header>
      <main>
        <img src={login} alt="" />
        <form>
          <label>Email</label>
          <EmailInput />

          <label>Senha</label>
          <PasswordInput />

          <Button>Entrar</Button>
          <section>
            <span>
              Ou crie uma conta <Link to="/register">aqui</Link>
            </span>
          </section>
        </form>
      </main>
    </ContainerLogin>
  );
};
export default Login;
