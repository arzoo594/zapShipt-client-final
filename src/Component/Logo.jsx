import React from "react";
import logo from "../assets/logo.png";
const Logo = () => {
  return (
    <a href="/">
      <div className="flex items-end">
        <img src={logo} alt="" />
        <h1 className="font-extrabold text-2xl text-secondary -ml-5 -mt-2">
          ZapShipt
        </h1>
      </div>
    </a>
  );
};

export default Logo;
