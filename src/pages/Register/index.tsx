import Form from "../../Components/Register/Form";
import img from "../../Assets/Sign up.gif";

import { Main } from "./styles";
import Header from "../../Components/Register/Header";
const Register = () => {
  return (
    <>
      <Header name='Cadastro' />

      <Main>
        <img src={img} alt="registration-ilustration" />
        <section className="formSection">
          <h3 className="title">Crie agora sua conta! </h3>
          <p className="subtitle">É grátis :)</p>
          <Form />
        </section>
      </Main>
    </>
  );
};

export default Register;
