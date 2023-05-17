import * as React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { ROUTING } from "types/routing";
import LangContext from "context/lang";
import UserContext from "context/user";

import useLanguage from "hooks/useLanguage";
import { User } from "UserServices/UserService";

const Logo = require("../assets/icons/logo.png") as string;

const Header = () => {
  const { language, toggleLanguage } = React.useContext(LangContext);
  const { user, changeUser } = React.useContext(UserContext);
  const [isSticky, setIsSticky] = React.useState(false);
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

  const logoutHandler = () => {
    User.logout()
    changeUser()
  }

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
          <div
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
          </div>

          {user
            ? <Link to={ROUTING.MAIN}>
              <Button variant="contained">{locale?.main}</Button>
            </Link>

            : <Link to={ROUTING.AUTH}>
              <Button variant="contained">{locale?.auth}</Button>
            </Link>

          }

          <Link to={ROUTING.AUTH}>
            <Button variant="contained" disabled={!user} onClick={logoutHandler}>{locale?.logout}</Button>
          </Link>


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
