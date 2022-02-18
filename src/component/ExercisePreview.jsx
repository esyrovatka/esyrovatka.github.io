import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";
const ExercisePreview = () => {
  return (
    <StyleBox>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h4" gutterBottom component="div" sx={{}}>
          Exercise list
        </Typography>
        <Button>+ Add</Button>
      </Box>

      <ExerciseItem
        val={100}
        name="Dumbbell Lateral Raise"
        repeat="3 sets/10reps"
      />

      <ExerciseItem
        val={50}
        name="Upright Dumbbell Row"
        repeat="3 sets/10reps"
      />
    </StyleBox>
  );
};

export default ExercisePreview;

const StyleBox = styled(Box)`
  margin: 0px auto;
  background: #fff;
  width: 50%;
  padding: 50px;
  border-radius: 25px;

  @media (max-width: 1200px) {
    margin: 20px auto;
  }

  @media (max-width: 900px) {
    width: 95%;
    padding: 50px 25px;
    justify-content: center;
  }
`;
const itemStyle = {
  backgroundColor: "#fff",
  borderRadius: "25px",
  margin: "0 auto",
  padding: "25px",
  width: "830px",
};

const ExerciseItem = ({ val, name, repeat }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "10px 0px",
      }}>
      <CircularProgressWithLabel value={val} />
      <Typography>{name}</Typography>
      <Typography>{repeat}</Typography>

      {val > 50 ? (
        <Button
          variant="contained"
          sx={{
            color: "#50CD89",
            backgroundColor: "rgba(80, 205, 137, 0.2)",
            borderRadius: "5px",
            width: "150px",
          }}>
          Execute
        </Button>
      ) : (
        <Button
          variant="contained"
          sx={{
            color: "#FFC700",
            backgroundColor: "#FFF7AD",
            borderRadius: "5px",
            width: "150px",
          }}>
          In progress
        </Button>
      )}

      <Box>
        <ModeEditOutlineIcon
          sx={{
            color: "#fff",
            backgroundColor: "#2D9CDB",
            borderRadius: "5px",
            margin: "0 5px",
            cursor: "pointer",
          }}
        />
        <DeleteIcon
          sx={{
            color: "#fff",
            backgroundColor: "#EB5757",
            borderRadius: "5px",
            margin: "0 5px",
            cursor: "pointer",
          }}
        />
      </Box>
    </Box>
  );
};

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        {...props}
        sx={{ color: props.value > 50 ? "#38E75A" : "#FECA2A" }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}
