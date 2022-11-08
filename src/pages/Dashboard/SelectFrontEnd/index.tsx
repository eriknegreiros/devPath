import HeaderDashboard from "../../../Components/Dashboard/HeaderDashboard";

import Footer from "../../../Components/Footer";
import DashboardFrontBasic from "../../../Components/Dashboard/DashboardFrontBasic";
import DashboardFrontIntermediario from "../../../Components/Dashboard/DashboardFrontIntermediario";
import DashboardFrontAvancado from "../../../Components/Dashboard/DashboardFrontAvancado";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Outlet } from "react-router-dom";

const SelectFrontEnd = () => {
  return (
    <>
      <HeaderDashboard />

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>{<DashboardFrontBasic />}</SwiperSlide>
        <SwiperSlide>{<DashboardFrontIntermediario />}</SwiperSlide>
        <SwiperSlide>{<DashboardFrontAvancado />}</SwiperSlide>
        ...
      </Swiper>

      <Footer />

      <Outlet />
    </>
  );
};

export default SelectFrontEnd;
