import React from "react";
import Menubar from "../../pages/Menubar/Menubar";
import { Outlet } from "react-router-dom";
const ServicesLayout = () => {
  return (
    <div>
      Hello from app
      <Menubar></Menubar>
      <Outlet></Outlet>
    </div>
  );
};

export default ServicesLayout;
