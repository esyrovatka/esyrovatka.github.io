import React from "react";
import AuthField from "../../component/AuthContainer";
import { AuthType } from "../../constants/Auth";
import auth_registr from "../../image/auth_registr.png";

const SignUp = () => {
  return (
    <AuthField
      type={AuthType.SignUp}
      main_img={auth_registr}
      text="Create new account"
    />
  );
};

export default SignUp;
