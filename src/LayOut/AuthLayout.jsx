import React from "react";
import Logo from "../Component/Logo";
import { Outlet } from "react-router";
import AuthImg from "../assets/authImage.png";
import AnimateOnScroll from "../Component/AnimateOnScroll";

const AuthLayout = () => {
  return (
    <div className="max-w-7xl p-20 mx-auto">
      <AnimateOnScroll>
        <Logo></Logo>
      </AnimateOnScroll>
      <main className="min-h-[calc(100vh-245px)] px-20  mx-auto">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <Outlet className=""></Outlet>
          </div>
          <div className="flex-1">
            <AnimateOnScroll>
              <img className="" src={AuthImg} alt="" />
            </AnimateOnScroll>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuthLayout;
