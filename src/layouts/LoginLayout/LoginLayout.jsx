/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import Menubar from "../../pages/Menubar/Menubar";
import Chefs from "../../pages/Chefs/Chefs";
import Footer from "../../pages/Footer/Footer";

const LoginLayout = () => {
  return (
    <div
    // className="bg-image"
    // style={{
    //   backgroundImage:
    //     "url('https://images.pexels.com/photos/628241/pexels-photo-628241.jpeg')",
    //   backgroundSize: "cover",
    //   height: "100vh",
    //   backgroundAttachment: "fixed",
    // }}
    >
      <Menubar></Menubar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default LoginLayout;
