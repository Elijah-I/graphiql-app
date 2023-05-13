import * as React from "react";
import { Outlet } from "react-router";

import Header from "components/Header";
import Footer from "components/Footer";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <>
      <Header />
      <Box sx={{ pt: 10, pb: 10 }}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
