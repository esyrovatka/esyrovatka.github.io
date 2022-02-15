import React, { useEffect, useState } from "react";
import NavPanel from "./NavPanel.jsx";
import { Box } from "@mui/material/";
// import logo from "../image/logo.jpg";
// import logo2 from "../image/logo2.jpg";
// import logo3 from "../image/logo3.jpg";
// import logo4 from "../image/logo4.jpg";
// import logo5 from "../image/logo5.jpg";
// import settings from "../image/settings.jpg";
import { useLocation } from "react-router";

const Layout = ({ children }) => {
  const location = useLocation();

  let imgLogo;

  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    const { pathname } = location;
    setCurrentPath(pathname);
  }, [location]);

  switch (currentPath) {
    // case "/":
    //   imgLogo = logo;
    //   break;
    // case "/exercise":
    //   imgLogo = logo2;
    //   break;
    // case "/exercise/edit":
    //   imgLogo = logo3;
    //   break;
    // case "/workout":
    //   imgLogo = logo4;
    //   break;
    // case "/workout/edit":
    //   imgLogo = logo5;
    //   break;
    // case "/settings":
    //   imgLogo = settings;
    //   break;

    // case "/login":
    //   imgLogo = login;
    //   break;

    // case "/register":
    //   imgLogo = registration;
    //   break;

    default:
      imgLogo = "";
      // imgLogo = logo;
      break;
  }
  return (
    <Box
      sx={{
        backgroundImage: `url(${imgLogo})`,
        backgroundSize: "cover",
        display: "flex",
        padding: "0px",
        margin: "0px;",
        width: "100%",
      }}>
      {currentPath !== "/login" && currentPath !== "/register" && <NavPanel />}
      {children}
    </Box>
  );
};

export default Layout;
