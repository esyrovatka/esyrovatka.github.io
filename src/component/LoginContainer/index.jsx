import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrUserAction } from "../../redux/action";

const LoginContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrUserAction());
  }, [dispatch]);

  return <></>;
};

export default LoginContainer;
