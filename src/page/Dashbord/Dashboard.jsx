import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isAuthorized, workout, workoutIsLoad } from "../../redux/selectors.js";
import { delWorkout, getAllExercise, getAllWorkout } from "../../redux/action";
import { Box, Grid } from "@mui/material/";
import Loader from "../../component/Loader.jsx";
import CalendarComponent from "../../component/CalendarComponent";
import Header from "../../component/Header.jsx";
import MyCarousel from "../../component/MyCarousel.jsx";
import ExercisePreview from "../../component/ExercisePreview.jsx";
import Chart from "../../component/chart.jsx";
import WorkoutTime from "../../component/WorkoutTime.jsx";
import VideoPreview from "../../component/VideoPreview.jsx";
import styled from "styled-components";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllExercise());
    dispatch(getAllWorkout());
  }, [dispatch]);

  const isAuth = useSelector(isAuthorized);
  const allWorkout = useSelector(workout);
  const Loading = useSelector(workoutIsLoad);

  const [workoutData, setWorkoutData] = useState([]); //all workout data

  useEffect(() => {
    allWorkout.map(
      (item) => !item.exerciseList.length && dispatch(delWorkout(item))
    );
  }, [allWorkout, dispatch]);

  useEffect(() => {
    const filterData = allWorkout.map((item) => new Date(item.data));
    setWorkoutData(filterData);
  }, [allWorkout]);

  return isAuth ? (
    !Loading ? (
      <Box component="main" sx={{ width: "100%" }}>
        <Header />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            margin: "30px auto",
          }}>
          <Chart workoutData={workoutData} />
          <CalendarComponent workoutData={workoutData} />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            margin: "30px auto",
          }}>
          <MyCarousel allWorkout={allWorkout} />
          <WorkoutTime />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            margin: "30px auto",
          }}>
          <ExercisePreview />
          <VideoPreview />
        </Box>

        {/* <GridStyled container>
          <Grid item lg={8} md={12}>
            <Chart workoutData={workoutData} />
          </Grid>
          <Grid item lg={4} md={12}>
            <CalendarComponent workoutData={workoutData} />
          </Grid>
        </GridStyled> */}

        {/* <GridStyled container>
          <Grid item lg={8} md={12} sx={{ width: "70%" }}>
            <MyCarousel allWorkout={allWorkout} />
          </Grid>
          <Grid item lg={4} md={12}>
            <WorkoutTime />
          </Grid>
        </GridStyled> */}

        {/*<Grid container sx={gridContStyle}>
          <Grid item lg={8} md={12}>
            <ExercisePreview />
          </Grid>
          <Grid item lg={4} md={12}>
            <VideoPreview />
          </Grid>
        </Grid> */}
      </Box>
    ) : (
      <Loader />
    )
  ) : (
    <Redirect to="/login" />
  );
};

const GridStyled = styled(Grid)`
  margin-top: 40px;
  @media (max-width: 1200px) {
    justify-content: center;
    margin-top: 10px;
  }
`;

export default Dashboard;
