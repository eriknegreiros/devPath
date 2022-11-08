import CardPosts from "../../Components/Dashboard/CardPosts";
import HeaderDashboard from "../../Components/Dashboard/HeaderDashboard";
import Footer from "../../Components/Footer";
import { DivButton, Main, DivUser } from "./style";
import img from "../../Assets/devs/erik.png";
import { motion } from "framer-motion";

const Forum = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <HeaderDashboard />
        <Main>
          <DivUser>
            <img src={img} alt="" />
            <div>
              <h4>Nome do Dev</h4>
              <h5>Ocupação do dev</h5>
            </div>
          </DivUser>

          <section>
            <h5>Compartilhe conosco!</h5>
            <form>
              <textarea
                name="post"
                placeholder="Conte para nós o que está estudando ou mande uma dica para outros devs :)"
              ></textarea>
              <DivButton>
                <button>Postar</button>
              </DivButton>
            </form>

            {/* 
        Fazer map dos posts */}

            <ul>
              <CardPosts />
              <CardPosts />
            </ul>
          </section>
        </Main>
        <Footer />
      </motion.div>
    </>
  );
};

export default Forum;
