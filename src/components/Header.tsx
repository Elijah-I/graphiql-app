import * as React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ROUTING } from "types/routing";

const Logo = require("./../assets/icons/logo.png") as string;

const Header = () => {
  const [isSticky, setIsSticky] = React.useState(false);

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
            to={ROUTING.MAIN}
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

          <Link to={ROUTING.AUTH}>
            <Button variant="contained">Sign In / Sign Up</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
