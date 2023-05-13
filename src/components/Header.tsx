import * as React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

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
          <img
            src={Logo}
            style={{
              width: isSticky ? "40px" : "50px",
              marginRight: "10px",
              transition: "all 0.2s ease"
            }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            GraphiQL
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
