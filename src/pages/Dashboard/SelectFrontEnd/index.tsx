import HeaderDashboard from "../../../Components/Dashboard/HeaderDashboard";
import Footer from "../../../Components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { motion } from "framer-motion";

const SelectFrontEnd = () => {
  const navigate = useNavigate();

  let location = useLocation();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
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
      </motion.div>
    </>
  );
};

export default SelectFrontEnd;
