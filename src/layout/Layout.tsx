import * as React from "react";
import { Outlet } from "react-router";

import Header from "components/Header";
import Footer from "components/Footer";
import { Box } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "firebase/firebase";
import { Loading } from "pages";
import { checkToken } from "firebase/firebase";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  React.useEffect(() => {
    const interval = setInterval(() => {
      if(!checkToken()) {
        console.log("expired token")
        logout();
        navigate('/');
      }

    }, 1000);
    return () => clearInterval(interval);
  });
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
