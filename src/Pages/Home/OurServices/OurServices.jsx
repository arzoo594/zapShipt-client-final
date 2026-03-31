import React from "react";
import services from "../../../assets/service.png";

const OurServices = () => {
  const serviceData = [
    {
      title: "Express & Standard Delivery",
      desc: "We deliver parcels within 24–72 hours in major cities. Express delivery available within 4–6 hours.",
    },
    {
      title: "Nationwide Delivery",
      desc: "We deliver parcels across the country with home delivery in every district.",
      highlight: true,
    },
    {
      title: "Fulfillment Solution",
      desc: "We offer inventory management, order processing, packaging, and after sales support.",
    },
    {
      title: "Cash on Home Delivery",
      desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety.",
    },
    {
      title: "Corporate Service / Contract",
      desc: "Customized corporate services including warehouse and inventory management.",
    },
    {
      title: "Parcel Return",
      desc: "Easy return system for customers with online business merchants.",
    },
  ];

  return (
    <div className="mt-10 rounded-xl text-white bg-teal-900 py-20 px-6">
      <h3 className="text-2xl font-bold text-center">Our Services</h3>
      <p className="text-gray-300 text-center mt-2">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to <br /> business shipments — we deliver
        on time, every time.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {serviceData.map((item, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 text-center transition-all duration-300 
            ${
              item.highlight
                ? "bg-primary text-black scale-105"
                : "bg-gray-100 text-black"
            }`}
          >
            <img
              className="bg-gray-200 mx-auto p-3 rounded-full mb-4"
              src={services}
              alt=""
            />

            <h3 className="font-semibold text-secondary text-lg mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
