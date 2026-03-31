import React from "react";
import logo from "../assets/logo.png";
const Logo = () => {
  return (
    <a href="/">
      <div className="flex items-end">
        <img src={logo} alt="" />
        <h1 className="font-extrabold text-xl text-secondary -ml-5 mb-1">
          ZapShipt
        </h1>
      </div>
    </a>
  );
};

export default Logo;
