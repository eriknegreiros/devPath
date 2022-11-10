import { DivText, Card, Section } from "./style";
import money from "../../../Assets/money.png";
import graphic from "../../../Assets/graphic.png";
import pc from "../../../Assets/pc.png";
import correct from "../../../Assets/correct.png";
import brain from "../../../Assets/brain.png";
import inovation from "../../../Assets/inovation.png";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import React from "react";

interface IProps {
  children: React.ReactNode;
}

const CardsStudy = () => {
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
        transition={{ duration: 0.3 }}
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
      <Section>
        <DivText>
          <h2>Por que estudar programação?</h2>
        </DivText>

        <Card>
          <FadeInWhenVisible>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 0.5,
                delay: 0.5,
              }}
            >
              <div>
                <img src={graphic} alt="" />
                <p>Mercado em Alta</p>
              </div>
            </motion.div>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 0.5,
                delay: 0.5,
              }}
            >
              <div>
                <img src={money} alt="" />
                <p>Altos Sálarios</p>
              </div>
            </motion.div>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 0.5,
                delay: 0.5,
              }}
            >
              <div>
                <img src={pc} alt="" />
                <p>Flexibilidade</p>
              </div>
            </motion.div>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 0.5,
                delay: 0.5,
              }}
            >
              <div>
                <img src={correct} alt="" />
                <p>Resolução de Problemas</p>
              </div>
            </motion.div>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 0.5,
                delay: 0.5,
              }}
            >
              <div>
                <img src={brain} alt="" />
                <p>Estimular a Criatividade</p>
              </div>
            </motion.div>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 0.5,
                delay: 0.5,
              }}
            >
              <div>
                <img src={inovation} alt="" />
                <p>Tirar ideias do papel</p>
              </div>
            </motion.div>
          </FadeInWhenVisible>
        </Card>
      </Section>
    </>
  );
};

export default CardsStudy;
