import Form from "../../Components/Register/Form";
import img from "../../Assets/Sign up.gif";
import { Main } from "./styles";
import Header from "../../Components/Register/Header";
import { motion } from "framer-motion";

const Register = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Header name="Cadastro" />

        <Main>
          <img src={img} alt="registration-ilustration" />
          <section className="formSection">
            <h3 className="title">Crie agora sua conta! </h3>
            <p className="subtitle">É grátis :)</p>
            <Form />
          </section>
        </Main>
      </motion.div>
    </>
  );
};

export default Register;
