/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import Menubar from "../../pages/Menubar/Menubar";

const LoginLayout = () => {
  return (
    <div
      className="bg-image"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/628241/pexels-photo-628241.jpeg')",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Menubar></Menubar>
      <Outlet></Outlet>
    </div>
  );
};

export default LoginLayout;
