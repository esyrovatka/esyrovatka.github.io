import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  currData,
  isAuthorized,
  workout,
  workoutIsLoad,
} from "../../redux/selectors.js";
import { delWorkout, getAllExercise, getAllWorkout } from "../../redux/action";
import { Box, Grid } from "@mui/material/";
import Loader from "../../component/Loader.jsx";
import CalendarComponent from "../../component/CalendarComponent";
import Header from "../../component/Header.jsx";
import MyCarousel from "../../component/MyCarousel.jsx";
import ExercisePreview from "../../component/ExercisePreview.jsx";
import Chart from "../../component/chart.jsx";
import PreviewWorkout from "../../component/PreviewWorkout.jsx";
import styled from "styled-components";
import WorkoutTime from "../../component/WorkoutTime.jsx";
import VideoPreview from "../../component/VideoPreview.jsx";

const Dashboard = () => {
  const style = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  };

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllExercise());
    dispatch(getAllWorkout());
  }, [dispatch]);

  const isAuth = useSelector(isAuthorized);
  const allWorkout = useSelector(workout);
  const currWorkoutDate = useSelector(currData);
  const Loading = useSelector(workoutIsLoad);

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
    allWorkout.map(
      (item) => !item.exerciseList.length && dispatch(delWorkout(item))
    );
  }, [allWorkout, dispatch]);

  useEffect(() => {
    const filterData = allWorkout.map((item) => new Date(item.data));
    // allWorkout && allWorkout.map((item) => new Date(item.data));
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
        <Header />
        <Grid container sx={{ marginTop: "40px" }}>
          <Grid item xs={8}>
            <Chart workoutData={workoutData} />
          </Grid>
          <Grid item xs={4}>
            <CalendarComponent workoutData={workoutData} />
          </Grid>
        </Grid>

        <Grid container sx={{ marginTop: "40px" }}>
          <Grid item xs={8}>
            <MyCarousel allWorkout={allWorkout} />
          </Grid>
          <Grid item xs={4}>
            <WorkoutTime />
          </Grid>
        </Grid>

        <Grid container sx={{ marginTop: "40px" }}>
          <Grid item xs={8}>
            <ExercisePreview />
          </Grid>
          <Grid item xs={4}>
            <VideoPreview />
          </Grid>
        </Grid>
      </Box>
    ) : (
      <Loader />
    )
  ) : (
    <Redirect to="/login" />
  );
};

// const CalendarBox = styled()``;

export default Dashboard;
