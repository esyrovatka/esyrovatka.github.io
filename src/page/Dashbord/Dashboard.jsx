import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  currData,
  isAuthorized,
  workout,
  workoutIsLoad,
} from "../../redux/selectors.js";
import { delWorkout, getAllExercise, getAllWorkout } from "../../redux/action";
import { Box, Typography, Button } from "@mui/material/";
import Header from "../../component/Header.jsx";
import Loader from "../../component/Loader.jsx";

import CalendarComponent from "../../component/CalendarComponent";
import WorkoutPreview from "../../component/WorkoutPreview";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Dashboard = () => {
  const style = {
    marginTop: 10,
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "65vh",
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const isAuth = useSelector(isAuthorized);
  const allWorkout = useSelector(workout);
  const currWorkoutDate = useSelector(currData);
  const Loading = useSelector(workoutIsLoad);

  useEffect(() => {
    dispatch(getAllExercise());
    dispatch(getAllWorkout());
  }, [dispatch]);

  const [workoutData, setWorkoutData] = useState([]); //all workout data
  const [currWorkout, setCurrWorkout] = useState(); // curr data workout

  useEffect(() => {
    const result =
      allWorkout &&
      allWorkout.find(
        (item) =>
          new Date(item.data).getDate() === currWorkoutDate.getDate() &&
          new Date(item.data).getMonth() === currWorkoutDate.getMonth()
      );
    setCurrWorkout(result);
  }, [currWorkoutDate, allWorkout]);

  useEffect(() => {
    for (let i = 0; i < allWorkout.length; i++) {
      !allWorkout[i].exerciseList.length && dispatch(delWorkout(allWorkout[i]));
    }
  }, [allWorkout, dispatch]);

  useEffect(() => {
    const filterData =
      allWorkout && allWorkout.map((item) => new Date(item.data));

    setWorkoutData(filterData);
  }, [allWorkout]);

  const createWorkoutLink = () => {
    history.push("/workout");
  };

  const editWorkoutLink = () => {
    history.push("/workout/edit");
  };

  return isAuth ? (
    !Loading ? (
      <Box component="main" sx={{ width: "100%" }}>
        <Header name="Dashboard" />
        <Box sx={style}  >
          <CalendarComponent workoutData={workoutData} sx={{ width: "50%" }} />
          <PreviewBox >
            {currWorkout ? (
              <>
                <Typography variant="h3" gutterBottom component="div">
                  Workout Preview
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
              </>
            ) : (
              <>
                <div>workout for this day is not created</div>
                <Button size="small" onClick={createWorkoutLink}>
                  Create Workout
                </Button>
              </>
            )}
          </PreviewBox>
        </Box>
      </Box>
    ) : (
      <Loader />
    )
  ) : (
    <Redirect to="/login" />
  );
};

const PreviewBox = styled(Box)`
background-color: rgb(141 131 131 / 50%);
padding: 40px;
color: #21c9a6;
button{
color: #21c9a6;
}

`

export default Dashboard;
