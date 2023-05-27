import React, { useState, useContext } from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { auth } from "../firebase/firebase";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { ROUTING } from "types/routing";
import LangContext from "context/lang";
import useLanguage from "hooks/useLanguage";
import { logout } from "../firebase/firebase";

const Logo = require("../assets/icons/logo.png") as string;

const Header = () => {
  const { language, toggleLanguage } = React.useContext(LangContext);
  const [isSticky, setIsSticky] = React.useState(false);
  const [user, loading, error] = useAuthState(auth);
  const locale = useLanguage("header");
  React.useEffect(() => {
    const listener = () => {
      const top = window.scrollY;

      if (!isSticky && !!top) setIsSticky(true);
      if (isSticky && !top) setIsSticky(false);
    };

    addEventListener("scroll", listener);
    return () => removeEventListener("scroll", listener);
  }, [isSticky]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 1,
          p: isSticky ? 0 : 0.5,
          transition: "all 0.2s ease"
        }}
      >
        <Toolbar>
          <Link
            to={user ? ROUTING.GRAPHIQL : ROUTING.MAIN}
            style={{
              flexGrow: 1,
              display: "flex",
              gap: "10px",
              alignItems: "center"
            }}
          >
            <img
              src={Logo}
              style={{
                width: isSticky ? "40px" : "50px",
                transition: "all 0.2s ease"
              }}
            />
            <Typography
              variant="h6"
              component="div"
            >
              GraphiQL
            </Typography>
          </Link>
          {
            user 
            ? 
            <>
              <Link onClick={() => {logout()}} to={ROUTING.MAIN}>
                <Button 
                  variant="contained">{locale.logout}</Button>
              </Link>
              <Link to={ROUTING.MAIN}>
                <Button 
                  variant="contained">{locale.backtomain}</Button>
              </Link>
            </>
            :
            <>            
              <Link to={ROUTING.LOGIN}>
                <Button variant="contained">{locale.login}</Button>
              </Link>
              <Link to={ROUTING.REGISTER}>
                <Button variant="contained">{locale.register}</Button>
              </Link>
            </>
          }    
          <Button
            sx={{ ml: 3 }}
            variant="contained"
            onClick={toggleLanguage}
          >
            {language.toUpperCase()}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
