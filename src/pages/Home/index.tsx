import HeaderMenu from "../../Components/Home/HeaderMenu";
import LandWithImage from "../../Components/Home/LandWithImage";
import CardsStudy from "../../Components/Home/CardsStudy";
import WhyDevPath from "../../Components/Home/WhyDevPath";
import Footer from "../../Components/Footer";
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
