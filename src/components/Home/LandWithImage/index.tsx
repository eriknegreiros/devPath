import { Section } from "./style";
import img from "../../../Assets/code.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LandWithImage = () => {
  return (
    <>
      <Section>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 0.5,
            delay: 0.5,
          }}
        >
          <img src={img} alt="" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 0.4,
          }}
        >
          <div>
            <h2>O guia de estudo para estudar programação totalmente gratis</h2>
            <p>
              O mapa completo para você impulsionar sua evolução e acessar as
              melhores oportunidades da sua carreira como dev.
            </p>

            <Link to={"./login"}>Acesse já!</Link>
          </div>
        </motion.div>
      </Section>
    </>
  );
};

export default LandWithImage;
