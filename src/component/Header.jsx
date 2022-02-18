import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material/";
import { useSelector } from "react-redux";
import { currUserName } from "../redux/selectors";
import styled from "styled-components";

const Header = ({ name }) => {
  const currName = useSelector(currUserName);

  return (
    <HeadeerStyle>
      <Typography
        variant="h4"
        component="div"
        sx={{ fontSize: "25px", lineHeight: "27px", fontWeight: 500 }}
        gutterBottom>
        Hello{" "}
        <Typography variant="span" sx={{ fontWeight: 900 }}>
          {currName ? currName : "Sportsman"}
        </Typography>
      </Typography>

      <Typography
        variant="p"
        sx={{ color: "#BDBDBD", fontSize: "18px", lineHeight: "27px" }}>
        Welcome and let’s do some workout today.
      </Typography>
    </HeadeerStyle>
  );
};

const HeadeerStyle = styled(Box)`
  padding: 30px;
  align-items: center;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

Header.defaultProps = {
  name: "",
};

Header.propTypes = {
  name: PropTypes.string,
};
export default Header;
