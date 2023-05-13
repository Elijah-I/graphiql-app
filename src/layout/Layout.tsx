import * as React from "react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      header
      <Outlet />
      footer
    </>
  );
};

export default Layout;
