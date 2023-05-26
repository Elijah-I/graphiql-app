import * as React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";

const Course = require("./../assets/icons/course.svg") as string;
const Gh = require("./../assets/icons/gh.svg") as string;

const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          position: "fixed",
          top: "auto",
          bottom: 0,
          left: 0,
          width: 1,
          p: 0.5,
          transition: "all 0.2s ease"
        }}
      >
        <Toolbar>
          <a
            href="https://rs.school/react/"
            target="_blank"
            style={{ opacity: 0.5, transition: "all 0.5s ease" }}
          >
            <img
              src={Course}
              style={{
                width: "50px",
                marginRight: "30px"
              }}
            />
          </a>
          <a
            href="https://github.com/Elijah-I"
            target="_blank"
            style={{ opacity: 0.5, transition: "all 0.5s ease" }}
          >
            <img
              src={Gh}
              style={{
                width: "20px",
                marginRight: "30px"
              }}
            />
          </a>
          <a
            href="https://github.com/foxnorth228"
            target="_blank"
            style={{ opacity: 0.5, transition: "all 0.5s ease" }}
          >
            <img
              src={Gh}
              style={{
                width: "20px",
                marginRight: "30px"
              }}
            />
          </a>

          <Box sx={{ ml: "auto" }}>2023</Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Footer;
