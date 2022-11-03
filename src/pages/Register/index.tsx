import Form from "../../components/Register/Form";
import img from "../../Assets/img-register.svg";

import { Main } from "./styles";
import Header from "../../components/Register/Header";

const Register = () => {
  return (
    <>
      <Header />

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
