import React, { useEffect } from "react";
import {
  Avatar,
  List,
  Typography,
  Button,
  Box,
  MenuItem,
  Menu,
} from "@mui/material/";
import LinkMenu from "./LinkMenu";
import { useDispatch, useSelector } from "react-redux";
import { currUserSelector } from "../redux/selectors";
import { useState } from "react";
import avatar from "../image/avatar.png";
import HeaderLink from "./HeaderLink";
import { useHistory } from "react-router";
import { PagePaths } from "../constants/PagePaths";
import { logOut } from "../redux/action";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
const NavPanel = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currUser = useSelector(currUserSelector);
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(currUser);
  }, [currUser]);

  const [srcAvatar, setSrcAvatar] = useState(avatar);

  const handleChange = (e) => {
    // const reader = new FileReader();
    // setSrcAvatar(e.target.value);
    setSrcAvatar(avatar);
  };

  const handleClick = (name) => () => {
    name === "Settings" && history.push(PagePaths.settings);
    name === "LogOut" && dispatch(logOut());
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <NavPanelStyle>
      <Box className="dekstop-menu">
        <Typography component="h1" variant="h5" gutterBottom>
          Fit Trainer
        </Typography>

        <Button component="label">
          <Avatar
            alt="Remy Sharp"
            src={srcAvatar}
            sx={{ height: "100px", width: "100px" }}
          />
          <input type="file" hidden onChange={handleChange} />
        </Button>

        <Typography
          component="h2"
          variant="h5"
          gutterBottom
          className="only-dekstop-menu">
          {user && user.name ? (
            user.name
          ) : (
            <Button onClick={handleClick("Settings")}>Change Name</Button>
          )}
        </Typography>
      </Box>

      <Box className="only-dekstop-menu">
        <LinkMenu />
      </Box>

      <Box className="only-dekstop-menu">
        <HeaderLink
          clickHandler={handleClick("Settings")}
          name="Settings"
          path="/exercise/edit"
        />
        <HeaderLink
          clickHandler={handleClick("LogOut")}
          name="Log Out"
          path="/exercise/edit"
        />
      </Box>

      <Box className="only-mobile-menu">
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickMenu}>
          <MenuIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}>
          <MenuItem onClick={handleClose}>
            <HeaderLink name="Dashboard" path="/" />
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <HeaderLink name="New Exercise" path="/exercise" />
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <HeaderLink name="Edit Exercise" path="/exercise/edit" />
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <HeaderLink name="New Workout" path="/workout" />
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <HeaderLink name="Edit Workout" path="/workout/edit" />
          </MenuItem>
        </Menu>
      </Box>
    </NavPanelStyle>
  );
};

const NavPanelStyle = styled(List)`
  display: flex;
  flex-direction: column;
  bgcolor: #fff;
  text-align: center;
  padding: 10px;
  justify-content: space-around;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: row;
    height: 100%;
    align-items: center;
  }

  .dekstop-menu {
    padding: 50px;
    border-bottom: 2px solid grey;
    font-weight: 600;
    margin: 0px 20px 15px;
    @media (max-width: 768px) {
      border-bottom: none;
    }
  }
  .only-dekstop-menu {
    @media (max-width: 768px) {
      display: none;
    }
  }
  .only-mobile-menu {
    display: none;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

export default NavPanel;
