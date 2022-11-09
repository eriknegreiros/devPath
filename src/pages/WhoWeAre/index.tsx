import HeaderMenu from "../../components/Home/HeaderMenu";
import CardsDev from "../../components/WhoWeAre/CardsDev";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

const WhoWeAre = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <HeaderMenu />
        <CardsDev />
        <Footer />
      </motion.div>
    </>
  );
};

export default WhoWeAre;
