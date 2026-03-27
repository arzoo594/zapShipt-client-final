import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";
import { GoArrowUpRight } from "react-icons/go";

const Banner = () => {
  return (
    <div className="relative mt-5">
      <Carousel autoPlay={true} infiniteLoop={true} interval={2000}>
        <div className="relative">
          <img src={banner1} />
          <button className="absolute hidden sm:flex items-center gap-2 bottom-22 left-24 btn btn-secondary">
            Track Your Parcel
            <GoArrowUpRight className="text-2xl bg-primary rounded-full" />
          </button>
        </div>
        <div className="relative">
          <button className="absolute hidden sm:flex items-center gap-2 bottom-22 left-24 btn btn-secondary">
            Track Your Parcel
            <GoArrowUpRight className="text-2xl bg-primary rounded-full" />
          </button>
          <img src={banner2} />
        </div>
        <div className="relative">
          <button className="absolute hidden sm:flex items-center gap-2 bottom-22 left-24 btn btn-secondary">
            Track Your Parcel
            <GoArrowUpRight className="text-2xl bg-primary rounded-full" />
          </button>
          <img src={banner3} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
