import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
const WorkoutTime = () => {
  return (
    <WorkoutTimeStyle>
      <Box className="workout-add">
        <Typography>Workout</Typography>
        <Button>+ Add</Button>
      </Box>

      <Box>
        <WorkoutItem
          type="cardio"
          name="Cardio trainy"
          time="18:00 - 19:00"
          date="12 Aug"
        />

        <WorkoutItem
          type="workout"
          name="Workout trainy"
          time="19:00 - 21:00"
          date="16-18 Aug"
        />

        <WorkoutItem
          type="tennis"
          name="Tennis"
          time="18:00 - 19:00"
          date="25-28 Aug"
        />
      </Box>
    </WorkoutTimeStyle>
  );
};

const WorkoutItem = ({ type, name, time, date }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#fff",
        padding: "15px",
        boxShadow: "0px 4px 13px rgba(0, 0, 0, 0.09)",
        borderRadius: "10px",
        margin: "4px 0px",
      }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {type === "cardio" && <FavoriteIcon sx={{ color: "#EB5757" }} />}
        {type === "workout" && <FitnessCenterIcon sx={{ color: "#2D9CDB" }} />}
        {type === "tennis" && <SportsTennisIcon sx={{ color: "#222222" }} />}

        <Box sx={{ marginLeft: "10px" }}>
          <Typography>{name}</Typography>
          <Typography sx={{ color: "#A3ABBD" }}>{time}</Typography>
        </Box>
      </Box>
      <Box>
        <Typography>{date}</Typography>
      </Box>
    </Box>
  );
};

const WorkoutTimeStyle = styled(Box)`
  max-width: 300px;
  margin: 0 auto;
  .workout-add {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export default WorkoutTime;
