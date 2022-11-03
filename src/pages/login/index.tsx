import { Button, ContainerLogin } from "./style";
import login from "../../Assets/login.svg";

import PasswordInput from "../../Components/passwordVisibilte";
import EmailInput from "../../Components/emailInput";
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
