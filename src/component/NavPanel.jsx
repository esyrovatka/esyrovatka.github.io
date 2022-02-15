import React, { useEffect } from "react";
import { Avatar, List, Typography, Button, Box } from "@mui/material/";
import LinkMenu from "./LinkMenu";
import { useDispatch, useSelector } from "react-redux";
import { currUserSelector } from "../redux/selectors";
import { useState } from "react";
import avatar from "../image/avatar.png";
import HeaderLink from "./HeaderLink";
import { useHistory } from "react-router";
import { PagePaths } from "../constants/PagePaths";
import { logOut } from "../redux/action";

const NavPanel = () => {
  const listStyle = {
    display: "flex",
    flexDirection: "column",
    bgcolor: "#fff;",
    textAlign: "center",
    padding: "10px",
    justifyContent: "space-around",
    minHeight: "100vh",
  };

  const typographyStyle = {
    padding: 5,
    borderBottom: "2px solid grey",
    fontWeight: 600,
    margin: "0px 20px 15px",
  };
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

  return (
    <List sx={listStyle}>
      <Box sx={typographyStyle}>
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

        <Typography component="h2" variant="h5" gutterBottom>
          {user && user.name ? user.name : "Change Name"}
        </Typography>
      </Box>

      <Box>
        <LinkMenu />
      </Box>

      <Box>
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
    </List>
  );
};

export default NavPanel;
