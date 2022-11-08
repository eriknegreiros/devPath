import HeaderMenu from "../../components/Home/HeaderMenu";
import LandWithImage from "../../components/Home/LandWithImage";
import CardsStudy from "../../components/Home/CardsStudy";
import WhyDevPath from "../../components/Home/WhyDevPath";
import Footer from "../../components/Footer";
import { Container } from "./style";
const Home = () => {
  return (
    <>
      <HeaderMenu />
      <Container>
        <LandWithImage />
        <CardsStudy />
        <WhyDevPath />
        <Footer />
      </Container>
    </>
  );
};

export default Home;
