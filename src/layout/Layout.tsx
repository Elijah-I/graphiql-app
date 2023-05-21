import * as React from "react";
import { Outlet } from "react-router";

import Header from "components/Header";
import Footer from "components/Footer";
import { Box } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "firebase/firebase";
import { Loading } from "pages";

const Layout = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <>
      {
        loading 
        ?
        <Loading />
        :
        <>
          <Header />
          <Box sx={{ pt: 10, pb: 10 }}>
            <Outlet />
          </Box>
          <Footer />
        </>
      }
    </>
  );
};

export default Layout;
