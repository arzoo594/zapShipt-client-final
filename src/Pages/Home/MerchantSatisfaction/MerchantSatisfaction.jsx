import React from "react";
import mercent from "../../../assets/location-merchant.png";

const MerchantSatisfaction = () => {
  return (
    <div className="mt-10 p-4">
      <div
        className="bg-[#0A2626] text-white rounded-xl p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10"
        style={{}}
      >
        <div className="flex-1 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
            Merchant and Customer Satisfaction
            <br /> is Our First Priority
          </h2>
          <p className="text-[#A3D9D9] text-base md:text-lg mb-10 leading-relaxed">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao Courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button className="bg-[#BCEE6B] text-[#0A2626] font-medium px-8 py-3 rounded-full text-lg shadow-md hover:bg-[#d0f58a] transition duration-300">
              Become a Merchant
            </button>
            <button className="bg-transparent text-[#BCEE6B] font-medium px-8 py-3 rounded-full text-lg border-2 border-[#BCEE6B] hover:bg-[#BCEE6B] hover:text-[#0A2626] transition duration-300">
              Earn with ZipShift Courier
            </button>
          </div>
        </div>

        <div className="relative flex-shrink-0">
          <svg
            width="220"
            height="220"
            viewBox="0 0 220 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.1"
              d="M106.843 3.65685C108.6 1.9001 111.399 1.9001 113.156 3.65685L216.343 106.843C218.1 108.6 218.1 111.399 216.343 113.156L113.156 216.343C111.399 218.1 108.6 218.1 106.843 216.343L3.65685 113.156C1.9001 111.399 1.9001 108.6 3.65685 106.843L106.843 3.65685Z"
              stroke="#BCEE6B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              opacity="0.1"
              cx="110"
              cy="110"
              r="109"
              stroke="#BCEE6B"
              strokeWidth="2"
            />
          </svg>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img
              src={mercent}
              className=" md:w-28 md:h-28 text-[#144747]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantSatisfaction;
