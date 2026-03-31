import React from "react";
import tracking from "../../assets/live-tracking.png";
import safeDeli from "../../assets/safe-delivery.png";

const WeHelp = () => {
  return (
    <div className="mt-10 p-4 space-y-6 max-w-6xl mx-auto">
      {[
        {
          img: tracking,
          title: "Live Parcel Tracking",
          desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
        },
        {
          img: safeDeli,
          title: "100% Safe Delivery",
          desc: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
        },
        {
          img: safeDeli,
          title: "24/7 Call Center Support",
          desc: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 shadow-sm border border-gray-100 rounded-2xl w-full"
        >
          <div className="flex-shrink-0 w-[120px] md:w-[180px] flex justify-center">
            <img
              className="w-full h-auto object-contain"
              src={item.img}
              alt={item.title}
            />
          </div>

          <div className="flex items-center gap-8 flex-1">
            <div className="hidden md:block border-l-2 border-dashed border-gray-300 h-24"></div>

            <div className="text-center md:text-left">
              <h1 className="font-bold text-xl  text-secondary mb-2">
                {item.title}
              </h1>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl">
                {item.desc}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeHelp;
