import React from "react";
import Nav from "../Components/Shared/Nav/Nav";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
