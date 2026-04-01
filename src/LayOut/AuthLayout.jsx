import React from "react";
import Logo from "../Component/Logo";
import { Outlet } from "react-router";
import AuthImg from "../assets/authImage.png";
import AnimateOnScroll from "../Component/AnimateOnScroll";

const AuthLayout = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 py-6">
      <AnimateOnScroll>
        <Logo />
      </AnimateOnScroll>

      <main className="min-h-[calc(100vh-120px)]">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2">
            <Outlet />
          </div>

          <div className="w-full lg:w-1/2">
            <AnimateOnScroll>
              <img className="w-full max-w-md mx-auto" src={AuthImg} alt="" />
            </AnimateOnScroll>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuthLayout;
