import React from "react";
import Menubar from "../../pages/Menubar/Menubar";
import { Outlet } from "react-router-dom";
const ChefsLayout = () => {
  return (
    <div>
      Hello from app
      <Menubar></Menubar>
      <Outlet></Outlet>
    </div>
  );
};

export default ChefsLayout;
