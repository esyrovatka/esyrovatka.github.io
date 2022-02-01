import React from "react";
import AuthField from "../../component/AuthContainer";
import { AuthType } from "../../constants/Auth";
import login_img from "../../image/auth_login.png";
const SignIn = () => {
  return (
    <>
      <AuthField type={AuthType.SignIn} main_img={login_img} text="Welcome!" />
    </>
  );
};
export default SignIn;
