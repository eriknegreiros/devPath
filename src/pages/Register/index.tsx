import Form from "../../components/Form";
import img from '../../Assets/img-register.svg'
import { Header, Main } from "./styles";

const Register = () => {
  return (
    <>
      <Header>
        <img src={img} alt="" />
        <section className="buttons-header">
          <button>Voltar</button>
          <button>Cadastro</button>
        </section>
      </Header>

      <Main>
        <img src="" alt="" />
        <section className="form-section">
          <h3>Crie agora sua conta! </h3>
          <p>É grátis :)</p>
          <Form />
        </section>
      </Main>
      
    </>
  );
};

export default Register;
