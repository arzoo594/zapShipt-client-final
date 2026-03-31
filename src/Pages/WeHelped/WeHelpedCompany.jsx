import React from "react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import amazon from "../../assets/amazon.png";
import vector from "../../assets/amazon_vector.png";
import casio from "../../assets/casio.png";
import moonstar from "../../assets/moonstar.png";
import randstad from "../../assets/randstad.png";
import star from "../../assets/star.png";
import starpeapole from "../../assets/start_people.png";
import daraz from "../../assets/daraz_logo_color.png";
const WeHelpedCompany = () => {
  return (
    <div className="mt-10 pb-15 border-gray-400 border-b-2 border-dashed px-4">
      <h1 className="text-center text-secondary mb-5 text-2xl font-bold">
        We've helped thousands of sales teams
      </h1>
      <Swiper
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={amazon} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={vector} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={casio} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={moonstar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={randstad} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={star} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={starpeapole} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[80px]" src={daraz} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default WeHelpedCompany;
