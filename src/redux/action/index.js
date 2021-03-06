import {
  IS_AUTHORIZED,
  IS_LOGOUT,
  SET_USER_ERROR,
  GET_ALL_EXERCISE,
  SET_EXERCISE_LOADING,
  DELETE_EXERCISE,
  UPDATE_EXERCISE,
  SET_WORKOUT_LOADING,
  GET_ALL_WORKOUT,
  GET_CURRENT_DATA,
  DELETE_WORKOUT,
  IS_UTHORIZED_LOADING,
  GET_CURRENT_USER,
  CREATE_NEW_WORKOUT,
} from "../constants.js";
import {
  createNewExerciseApi,
  createWorkoutApi,
  delExerciseApi,
  delWorkoutApi,
  getAllExerciseApi,
  getAllWorkoutApi,
  loginApi,
  registrApi,
  updateWorkoutApi,
  updExerciseApi,
  userUpdateApi,
  getCurrUserApi,
} from "../api/api";
import store from "../store";
import { attachUnauthHandler } from "../api/axiosConfig";

// user action //
export const registrAction = (user) => async (dispatch) => {
  try {
    dispatch({ type: IS_UTHORIZED_LOADING });
    const response = await registrApi(user);
    localStorage.setItem("token", response.data);
    dispatch({ type: IS_AUTHORIZED, payload: user });
  } catch (err) {
    dispatch({ type: IS_UTHORIZED_LOADING });
    dispatch({ type: SET_USER_ERROR, payload: err.response.status });
  }
};

export const loginAction = (user) => async (dispatch) => {
  dispatch({ type: IS_UTHORIZED_LOADING });
  try {
    const response = await loginApi(user);
    localStorage.setItem("token", response.data.token);
    dispatch({ type: IS_AUTHORIZED, payload: response.data.user[0] });
  } catch (err) {
    dispatch({ type: SET_USER_ERROR, payload: err.response.status });
  }
};

export const getCurrUserAction = () => async (dispatch) => {
  dispatch({ type: IS_UTHORIZED_LOADING });
  try {
    const response = await getCurrUserApi();
    dispatch({ type: GET_CURRENT_USER, payload: response.data.user[0] });
  } catch (err) {
    dispatch({ type: SET_USER_ERROR, payload: err.response.status });
  }
};

export const userUpdateAction = (user) => async (dispatch) => {
  try {
    delete user.confirmPassword;
    !user.password.length && delete user.password;
    !user.email.length && delete user.email;
    !user.name.length && delete user.name;
    dispatch({ type: IS_UTHORIZED_LOADING });
    await userUpdateApi(user);
    dispatch({ type: IS_AUTHORIZED, payload: user });
  } catch (err) {
    dispatch({ type: SET_USER_ERROR, payload: err.response.status });
  }
};

export const logOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("Exercise_Order");
  return { type: IS_LOGOUT };
};

// Exercise action //
export const getAllExercise = () => async (dispatch) => {
  dispatch({ type: SET_EXERCISE_LOADING });
  try {
    const response = await getAllExerciseApi();
    dispatch({ type: GET_ALL_EXERCISE, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

export const createNewExercise = (exercise) => async () => {
  try {
    const response = await createNewExerciseApi(exercise);
    if (localStorage.Exercise_Order) {
      const order = JSON.parse(localStorage.Exercise_Order);
      order.push(response.data._id);
      localStorage.setItem("Exercise_Order", JSON.stringify(order));
    }
  } catch (err) {
    console.log(err);
  }
};

export const updExercise = (exercise) => async (dispatch) => {
  try {
    await updExerciseApi(exercise);
    dispatch({ type: UPDATE_EXERCISE, payload: exercise });
  } catch (err) {
    console.log(err);
  }
};

export const delExercise = (id) => async (dispatch) => {
  try {
    const response = await delExerciseApi(id);
    if (localStorage.Exercise_Order) {
      const order = JSON.parse(localStorage.Exercise_Order);
      const result = order.filter((item) => item !== id);
      localStorage.setItem("Exercise_Order", JSON.stringify(result));
    }
    dispatch({ type: DELETE_EXERCISE, payload: response.data });
  } catch (err) {
    console.log("error", err);
  }
};

// Workout action //
export const getAllWorkout = () => async (dispatch) => {
  dispatch({ type: SET_WORKOUT_LOADING });
  try {
    const response = await getAllWorkoutApi();
    dispatch({
      type: GET_ALL_WORKOUT,
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const createWorkout = (workout) => async (dispatch) => {
  dispatch({ type: SET_WORKOUT_LOADING });
  try {
    const response = await createWorkoutApi(workout);
    dispatch({ type: CREATE_NEW_WORKOUT, payload: response.data });
  } catch (err) {
    // dispatch({ type: SET_WORKOUT_ERROR})
    console.log(err);
  }
};

export const updateWorkout = (workout) => async () => {
  try {
    await updateWorkoutApi(workout);
  } catch (err) {
    console.log(err);
  }
};

export const delWorkout = (workout) => async (dispatch) => {
  try {
    const response = await delWorkoutApi(workout);
    dispatch({
      type: DELETE_WORKOUT,
      payload: response.data._id,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getCurrData = (currData) => (dispatch) => {
  dispatch({
    type: GET_CURRENT_DATA,
    payload: currData,
  });
};

// common reaction for 401 error
attachUnauthHandler(() => store.dispatch(logOut()));
