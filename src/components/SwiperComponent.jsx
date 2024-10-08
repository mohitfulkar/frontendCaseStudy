import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules"; 
import Image1 from "../images/google.png";
import Image2 from "../images/accenture.png";
import Image3 from "../images/microsoft.png";

import Image5 from "../images/jp.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <>
      <p className="our-client-heading text-center text-xl  pt-5">
        Our Clients
      </p>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} // Add Autoplay module
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false, 
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="swiper h-44 items-center justify-center flex pl-12"
      >
        <SwiperSlide>
          <img src={Image1} className="h-34 w-64" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image2} className="h-34 w-64" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image3} className="h-34 w-64" alt="Slide 3" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Image5} className="h-34 w-64" alt="Slide 4" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
