import HeaderMenu from "../../components/Home/HeaderMenu";
import LandWithImage from "../../components/Home/LandWithImage";
import CardsStudy from "../../components/Home/CardsStudy";
import WhyDevPath from "../../components/Home/WhyDevPath";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <HeaderMenu />
        <LandWithImage />
        <CardsStudy />
        <WhyDevPath />
        <Footer />
      </motion.div>
    </>
  );
};

export default Home;
