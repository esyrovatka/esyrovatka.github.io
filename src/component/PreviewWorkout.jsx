import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";
import WorkoutPreview from "./WorkoutPreview";

const PreviewWorkout = ({
  currWorkout,
  editWorkoutLink,
  createWorkoutLink,
}) => {
  return currWorkout ? (
    <PreviewBox>
      <Typography variant="h4" gutterBottom component="div">
        Workout Preview:
      </Typography>

      {currWorkout.exerciseList.map((item, index) => (
        <WorkoutPreview
          className="workout-preview"
          key={item._id}
          exercise={item}
          index={index}
        />
      ))}
      <Button size="small" onClick={editWorkoutLink}>
        Edit Workout
      </Button>
    </PreviewBox>
  ) : (
    <>
      <Button size="small" onClick={createWorkoutLink}>
        Create Workout
      </Button>
    </>
  );
};

const PreviewBox = styled(Box)`
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    font-size: 26px;
  }
`;

export default PreviewWorkout;
