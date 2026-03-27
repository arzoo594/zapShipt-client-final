import React from "react";
import { GrDeliver } from "react-icons/gr";

const HowItWork = () => {
  return (
    <div className="shadow-lg rounded-2xl p-4 mt-10">
      <p className="font-extrabold text-3xl text-secondary">How It Work</p>

      <div className="mt-8 px-2 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 rounded-2xl">
        <div className="bg-gray-100 py-4 px-4 sm:px-6 rounded-2xl text-center">
          <GrDeliver className="text-secondary text-2xl mb-2 mx-auto" /> <br />
          <h4 className="text-secondary font-bold mb-2">Booking Pick & Drop</h4>
          <p className="text-gray-400 text-sm sm:text-base">
            From personal packages to <br /> business shipments — we deliver{" "}
            <br /> on time, every time.
          </p>
        </div>

        <div className="bg-gray-100 py-4 px-4 sm:px-6 rounded-2xl text-center">
          <GrDeliver className="text-secondary text-2xl mb-2 mx-auto" /> <br />
          <h4 className="text-secondary font-bold mb-2">Cash On Delivery</h4>
          <p className="text-gray-400 text-sm sm:text-base">
            From personal packages to <br /> business shipments — we deliver{" "}
            <br /> on time, every time.
          </p>
        </div>

        <div className="bg-gray-100 py-4 px-4 sm:px-6 rounded-2xl text-center">
          <GrDeliver className="text-secondary text-2xl mb-2 mx-auto" /> <br />
          <h4 className="text-secondary font-bold mb-2">Cash On Delivery</h4>
          <p className="text-gray-400 text-sm sm:text-base">
            From personal packages to <br /> business shipments — we deliver{" "}
            <br /> on time, every time.
          </p>
        </div>

        <div className="bg-gray-100 py-4 px-4 sm:px-6 rounded-2xl text-center">
          <GrDeliver className="text-secondary text-2xl mb-2 mx-auto" /> <br />
          <h4 className="text-secondary font-bold mb-2">Delivery Hub</h4>
          <p className="text-gray-400 text-sm sm:text-base">
            From personal packages to <br /> business shipments — we deliver{" "}
            <br /> on time, every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
