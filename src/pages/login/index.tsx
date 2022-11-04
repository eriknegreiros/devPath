import { Button, ContainerLogin } from "./style";
import loginAnimation from "../../Assets/loginAnimation.json";
import { useForm } from "react-hook-form";

import PasswordInput from "../../Components/Login/emailInput/index";
import EmailInput from "../../Components/Login/emailInput";

import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface iLogin {
  email: string;
  password: string;
}

const Login = () => {
  const Schema = yup.object().shape({
    password: yup.string().required("Senha obrigatorio!"),
    email: yup.string().required("Email obrigatorio!!").email(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLogin>({
    resolver: yupResolver(Schema),
  });

  /* lottie */
  const defaultOptions = {
    loop: true,
    autoPlay: true,
    animationData: loginAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMIdyMid slice",
    },
  };

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
        <section className="container">
          <Lottie options={defaultOptions}></Lottie>
        </section>

        <form>
          <div>
            <h1>Login</h1>
          </div>
          <label>Email</label>

          <EmailInput register={register} />
          <p>{errors.email?.message}</p>

          <label>Senha</label>
          <PasswordInput register={register} />
          <p>{errors.email?.message}</p>

          <Button>Entrar</Button>
          <section>
            <Link to="/register" className="toRegister">
              Ou crie uma conta aqui
            </Link>
          </section>
        </form>
      </main>
    </ContainerLogin>
  );
};
export default Login;
