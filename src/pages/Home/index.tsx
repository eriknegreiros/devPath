import HeaderMenu from "../../Components/Home/HeaderMenu";
import LandWithImage from "../../Components/Home/LandWithImage";
import CardsStudy from "../../Components/Home/CardsStudy";
import WhyDevPath from "../../Components/Home/WhyDevPath";
import Footer from "../../Components/Footer";

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
