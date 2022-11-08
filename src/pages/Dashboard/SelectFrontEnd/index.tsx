import HeaderDashboard from "../../../Components/Dashboard/HeaderDashboard";
import Footer from "../../../Components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Outlet, useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { useLocation } from "react-router-dom";

const SelectFrontEnd = () => {
  const navigate = useNavigate();

  let location = useLocation();

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

export default SelectFrontEnd;
