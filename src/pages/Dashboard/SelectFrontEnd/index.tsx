import HeaderDashboard from "../../../components/Dashboard/HeaderDashboard";

import Footer from "../../../components/Footer";
import DashboardFrontBasic from "../../../components/Dashboard/DashboardFrontBasic";
import DashboardFrontIntermediario from "../../../components/Dashboard/DashboardFrontIntermediario";
import DashboardFrontAvancado from "../../../components/Dashboard/DashboardFrontAvancado";
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
