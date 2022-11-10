import { Button, ContainerLogin } from "./style";
import { useForm } from "react-hook-form";
import PasswordInput from "../../Components/Login/passwordVisibilte";
import EmailInput from "../../Components/Login/emailInput";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Header from "../../Components/Register/Header";
import img from "../../Assets/login.gif";
import { motion } from "framer-motion";
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <ContainerLogin>
        <Header name="Login" />
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

            <Button disabled={loading}>
              {loading ? "Entrando..." : "Entrar"}
            </Button>
            <section>
              {`Ou crie uma conta `}
              <Link to="/signUp" className="toRegister">
                aqui
              </Link>
            </section>
          </form>
        </main>
      </ContainerLogin>
    </motion.div>
  );
};
export default Login;
