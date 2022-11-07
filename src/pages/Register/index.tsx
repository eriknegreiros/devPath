<<<<<<< HEAD
import Form from "../../components/Form";
import img from '../../Assets/img-register.svg'
import { Header, Main } from "./styles";
=======
import Form from "../../components/Register/Form";
import img from "../../Assets/Sign up.gif";

import { Main } from "./styles";
import Header from "../../components/Register/Header";
>>>>>>> c6ed82dd1b3dec19c96bd4d7c4ec4dd92ebcdee9

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
