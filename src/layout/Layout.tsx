import * as React from "react";
import { Outlet } from "react-router";

import Header from "components/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      footer
    </>
  );
};

export default Layout;
