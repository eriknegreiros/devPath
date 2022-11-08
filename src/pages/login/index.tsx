import { Button, ContainerLogin } from "./style";
import loginAnimation from "../../Assets/loginAnimation.json";
import { useForm } from "react-hook-form";
import PasswordInput from "../../components/Login/passwordVisibilte";
import EmailInput from "../../components/Login/emailInput";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Header from "../../components/Register/Header";
import img from "../../Assets/login.gif";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export interface iLogin {
  email: string;
  password: string;
}

const Login = () => {
  
  const { loginUser, loading } = useContext(UserContext);

  const Schema = yup.object().shape({
    email: yup.string().required("Email obrigatorio!!").email(),
    password: yup.string().required("Senha obrigatorio!"),
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
      <Header />

      <main>
        <section className="container">
          <img className="img" src={img} alt="" />
        </section>

        <form onSubmit={handleSubmit(loginUser)}>
          <div>
            <h1>Login</h1>
          </div>
          <label>Email</label>

          <EmailInput register={register} />
          <p>{errors.email?.message}</p>

          <label>Senha</label>
          <PasswordInput register={register} />
          <p>{errors.password?.message}</p>

          <Button disabled={loading}>{loading ? 'Entrando...' : 'Entrar'}</Button>
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
