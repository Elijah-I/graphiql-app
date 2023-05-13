import * as React from "react";
import * as ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { Typography } from "@mui/material";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Typography variant="h5">hello</Typography>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);

if (process.env.NODE_ENV === "development" && module && module.hot)
  module.hot.accept();
