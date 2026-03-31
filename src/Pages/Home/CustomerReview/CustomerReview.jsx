import React from "react";
import customerReview from "../../../assets/customer-top.png";
import review from "../../../assets/reviewQuote.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const CustomerReview = () => {
  return (
    <div className="mt-10 p-4">
      {/* Top Section */}
      <div className="flex flex-col items-center justify-center text-center">
        <img src={customerReview} alt="" />
        <h1 className="text-secondary mt-4 text-xl md:text-2xl font-extrabold">
          What our customers are sayings
        </h1>
        <p className="text-gray-400 mt-2 max-w-xl">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      <div className="mt-10 w-full overflow-hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          <SwiperSlide className="flex">
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md hover:shadow-xl transition w-full flex flex-col justify-between border border-gray-200 hover:border-teal-400">
              <div>
                <h1 className="text-3xl md:text-4xl text-teal-200 mb-2">“</h1>
                <p className="text-gray-500 border-b border-dashed border-gray-300 pb-4">
                  A posture corrector helps align your shoulders and spine for
                  better posture.
                </p>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-sm">
                  A
                </div>
                <div>
                  <h2 className="font-semibold">Awlad Hossin</h2>
                  <p className="text-sm text-gray-400">Senior Designer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex">
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md hover:shadow-xl transition w-full flex flex-col justify-between border border-gray-200 hover:border-teal-400">
              <div>
                <h1 className="text-3xl md:text-4xl text-teal-200 mb-2">“</h1>
                <p className="text-gray-500 border-b border-dashed border-gray-300 pb-4">
                  This product improved my posture and reduced back pain
                  significantly.
                </p>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-sm">
                  R
                </div>
                <div>
                  <h2 className="font-semibold">Rahim Uddin</h2>
                  <p className="text-sm text-gray-400">Web Developer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex">
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md hover:shadow-xl transition w-full flex flex-col justify-between border border-gray-200 hover:border-teal-400">
              <div>
                <h1 className="text-3xl md:text-4xl text-teal-200 mb-2">“</h1>
                <p className="text-gray-500 border-b border-dashed border-gray-300 pb-4">
                  খুবই আরামদায়ক এবং ব্যবহার করা সহজ। Highly recommended!
                </p>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-sm">
                  K
                </div>
                <div>
                  <h2 className="font-semibold">Karim Ahmed</h2>
                  <p className="text-sm text-gray-400">Entrepreneur</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex">
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md hover:shadow-xl transition w-full flex flex-col justify-between border border-gray-200 hover:border-teal-400">
              <div>
                <h1 className="text-3xl md:text-4xl text-teal-200 mb-2">“</h1>
                <p className="text-gray-500 border-b border-dashed border-gray-300 pb-4">
                  Helps me stay straight while working long hours at my desk.
                </p>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-sm">
                  N
                </div>
                <div>
                  <h2 className="font-semibold">Nusrat Jahan</h2>
                  <p className="text-sm text-gray-400">UI Designer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex">
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md hover:shadow-xl transition w-full flex flex-col justify-between border border-gray-200 hover:border-teal-400">
              <div>
                <h1 className="text-3xl md:text-4xl text-teal-200 mb-2">“</h1>
                <p className="text-gray-500 border-b border-dashed border-gray-300 pb-4">
                  Great support for my back and shoulders. Worth every penny.
                </p>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-sm">
                  T
                </div>
                <div>
                  <h2 className="font-semibold">Tanvir Hasan</h2>
                  <p className="text-sm text-gray-400">Engineer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex">
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md hover:shadow-xl transition w-full flex flex-col justify-between border border-gray-200 hover:border-teal-400">
              <div>
                <h1 className="text-3xl md:text-4xl text-teal-200 mb-2">“</h1>
                <p className="text-gray-500 border-b border-dashed border-gray-300 pb-4">
                  My posture improved within a few weeks. খুব ভালো প্রোডাক্ট।
                </p>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-sm">
                  S
                </div>
                <div>
                  <h2 className="font-semibold">Sadia Islam</h2>
                  <p className="text-sm text-gray-400">Student</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex">
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md hover:shadow-xl transition w-full flex flex-col justify-between border border-gray-200 hover:border-teal-400">
              <div>
                <h1 className="text-3xl md:text-4xl text-teal-200 mb-2">“</h1>
                <p className="text-gray-500 border-b border-dashed border-gray-300 pb-4">
                  Lightweight and খুব comfortable. I use it daily.
                </p>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-sm">
                  I
                </div>
                <div>
                  <h2 className="font-semibold">Imran Khan</h2>
                  <p className="text-sm text-gray-400">Freelancer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex">
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md hover:shadow-xl transition w-full flex flex-col justify-between border border-gray-200 hover:border-teal-400">
              <div>
                <h1 className="text-3xl md:text-4xl text-teal-200 mb-2">“</h1>
                <p className="text-gray-500 border-b border-dashed border-gray-300 pb-4">
                  Best solution for correcting posture without any hassle.
                </p>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-sm">
                  F
                </div>
                <div>
                  <h2 className="font-semibold">Fahim Rahman</h2>
                  <p className="text-sm text-gray-400">Marketer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CustomerReview;
