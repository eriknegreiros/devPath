import HeaderMenu from "../../Components/Home/HeaderMenu";
import CardsDev from "../../Components/WhoWeAre/CardsDev";
import Footer from "../../Components/Footer";
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
