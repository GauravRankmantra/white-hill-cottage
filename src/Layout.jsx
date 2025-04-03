import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div className="flex bg-gray-200 flex-col min-h-screen no-scrollbar">
      {/* <ToastContainer /> */}
      <div className="top-0">
        <Navbar />
      </div>

      {/* <Sidebar /> */}
      <div className="flex-auto  mt-28 overflow-hidden  ">
        <Outlet />
      </div>

      {/* <MusicPlayer />*/}

      <Footer /> 
    </div>
  );
};

export default Layout;
