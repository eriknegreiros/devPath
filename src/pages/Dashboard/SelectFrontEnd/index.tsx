<<<<<<< HEAD
import HeaderDashboard from "../../../components/Dashboard/HeaderDashboard";
import Footer from "../../../components/Footer";
=======
import HeaderDashboard from "../../../Components/Dashboard/HeaderDashboard";
import Footer from "../../../Components/Footer";
>>>>>>> 6b920ad4911e602145d421dda591200b1ec73259
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

<<<<<<< HEAD
=======
import { useLocation } from "react-router-dom";

>>>>>>> 6b920ad4911e602145d421dda591200b1ec73259
const SelectFrontEnd = () => {
  const navigate = useNavigate();

  let location = useLocation();
<<<<<<< HEAD
  return (
    <>
      <HeaderDashboard />

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        onSlideChange={(e) => {
          console.log(e);
          if (location.pathname === "/dashboard/frontEnd") {
            navigate("frontEndIntermediary");
          } else if (
            location.pathname === "/dashboard/frontEnd/frontEndIntermediary"
          ) {
            navigate("frontEndAdvanced");
          }
        }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>{<Outlet />}</SwiperSlide>
        <SwiperSlide>{<Outlet />}</SwiperSlide>
        <SwiperSlide>{<Outlet />}</SwiperSlide>
      </Swiper>

      <Footer />
    </>
  );
};
=======

  
    return (
      <>
        <HeaderDashboard />

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          navigation
          pagination={{ clickable: true }}
          slidesPerView={1}
          onSlideChange={(e) => {
            console.log(e);
            if (location.pathname === "/dashboard/frontEnd") {
              navigate("frontEndIntermediary");
            } else if (
              location.pathname === "/dashboard/frontEnd/frontEndIntermediary"
            ) {
              navigate("frontEndAdvanced");
            }
          }}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>{<Outlet />}</SwiperSlide>
          <SwiperSlide>{<Outlet />}</SwiperSlide>
          <SwiperSlide>{<Outlet />}</SwiperSlide>
        </Swiper>

        <Footer />
      </>
    );
  };
>>>>>>> 6b920ad4911e602145d421dda591200b1ec73259

export default SelectFrontEnd;