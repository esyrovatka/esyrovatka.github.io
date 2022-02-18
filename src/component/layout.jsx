import React, { useEffect, useState } from "react";
import NavPanel from "./NavPanel.jsx";
import { Box } from "@mui/material/";
import { useLocation } from "react-router";
import styled from "styled-components";

const Layout = ({ children }) => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);
  useEffect(() => {
    const { pathname } = location;
    setCurrentPath(pathname);
  }, [location]);

  return (
    <MainConteiner>
      {currentPath !== "/login" && currentPath !== "/register" && <NavPanel />}
      {children}
    </MainConteiner>
  );
};

const MainConteiner = styled(Box)`
  display: flex;
  padding: 0px;
  margin: 0px;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    // align-items: center;
  }
`;

export default Layout;
