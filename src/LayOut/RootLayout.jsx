import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Pages/Home/Shared/Navbar/Navbar";
import Footer from "../Pages/Home/Shared/Footer/Footer";
import ArzooInfo from "../Pages/Home/Shared/ArzooInfo";

const RootLayout = () => {
  return (
    <div className="mx-w-7xl mx-auto">
      <Navbar></Navbar>
      <main className="min-h-[calc(100vh-245px)] px-5 py-4 mx-auto">
        <Outlet className=""></Outlet>
      </main>
      <Footer></Footer>
      <ArzooInfo></ArzooInfo>
    </div>
  );
};

export default RootLayout;
