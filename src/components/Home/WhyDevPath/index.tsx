import { Section, DivText } from "./style";
import objective from "../../../Assets/objective.png";
import study from "../../../Assets/study.png";
import free from "../../../Assets/free.png";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import React from "react";

interface IProps {
  children: React.ReactNode;
}

const WhyDevPath = () => {
  function FadeInWhenVisible({ children }: IProps) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ ease: "easeOut", duration: 1 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <>
      <DivText>
        <h2>Por que escolher a devPath?</h2>
      </DivText>
      <FadeInWhenVisible>
        <Section>
          <div>
            <img src={objective} alt="" />
            <h3>Foco</h3>
            <p>
              Programação é um universo infinito, logo ter foco é essencial. Nós
              vamos direto ao ponto no que realmente importa para você dominar
              as ferramentas, não apenas conhecê-las.
            </p>
          </div>

          <div>
            <img src={study} alt="" />

            <h3>Prática</h3>
            <p>
              A programação é uma disciplina prática. São as horas de código que
              vão te preparar e dar a experiência necessária para tomar as
              melhores decisões no mundo real.
            </p>
          </div>

          <div>
            <img src={free} alt="" />

            <h3>Grátis</h3>
            <p>
              Plataforma totalmente gratuita com a melhor curadoria de estudos,
              com as tecnologias mais atuais que vão te colocar no mercado de
              trabalho.
            </p>
          </div>
        </Section>
      </FadeInWhenVisible>
    </>
  );
};

export default WhyDevPath;
