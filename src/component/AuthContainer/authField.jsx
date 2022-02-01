import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  FormControlLabel,
  Checkbox,
} from "@mui/material/";
import { AuthType } from "../../constants/Auth";
import { ErrorMessage, HelpMessage } from "../../constants/ErrorMessage";

const AuthField = ({
  submitFunc,
  handleChange,
  user,
  helpLink,
  type,
  disableForm,
  errorMessage,
  main_img,
  text,
}) => {
  return (
    <AuthPage>
      <Box className="page-auth-form">
        <Typography className="page-title" component="h1" variant="h3">
          <span className="blueTitle">FIT</span> <span>TRAINER.</span>
        </Typography>

        <Box
          component="form"
          className="form-field"
          onSubmit={submitFunc}
          noValidate
          sx={{ mt: 1 }}>
          <Typography className="welcome" component="h2" variant="h5">
            {text}
          </Typography>

          <TextField
            required
            id="email"
            label="Email Address"
            placeholder="Example@gmail.com"
            name="email"
            autoFocus
            onChange={handleChange}
            value={user.email}
            autoComplete="off"
            className="form-field-login"
          />

          <TextField
            className="form-field-login"
            required
            placeholder="******"
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={handleChange}
            value={user.password}
          />

          {errorMessage === 404 && (
            <Typography component="p" sx={{ color: "red" }}>
              {ErrorMessage.Incorrect}
            </Typography>
          )}
          {errorMessage === 406 && (
            <Typography component="p" sx={{ color: "red" }}>
              {ErrorMessage.AlreadyUse}
            </Typography>
          )}
          <Box className="auth-checkbox-field">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember me"
            />
            <Link variant="body2" className="help-link">
              Forgot password?
            </Link>
          </Box>

          <Button
            className="form-auth-btn"
            type="submit"
            variant="contained"
            disabled={disableForm}
            sx={{ mt: 3, mb: 2 }}>
            {type}
          </Button>
          <Link variant="body2" className="help-link">
            {type === AuthType.SignIn ? (
              <>
                {HelpMessage.CreateAcc} <span onClick={helpLink}>Sign Up</span>
              </>
            ) : (
              <>
                {HelpMessage.LoginAcc} <span onClick={helpLink}>Sign In</span>
              </>
            )}
          </Link>
        </Box>
      </Box>

      <Box
        className="img-auth"
        style={{ backgroundImage: `url(${main_img})` }}></Box>
    </AuthPage>
  );
};

const AuthPage = styled(Container)`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
  min-width: 100%;
  display: flex;
  justify-content: space-between;
  height: 100vh;
  padding: 0px;
  margin: 0px;

  .img-auth {
    font-family: "Poppins", sans-serif;
    width: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 1100px) {
      display: none;
    }
  }
  .page-auth-form {
    width: 50%;
    padding-top: 60px;
    padding-left: 100px;
    @media (max-width: 1100px) {
      padding-top: 0px;
      padding-left: 0px;
      width: 100%;
      text-align: center;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }

    .page-title {
      font-family: "Poppins", sans-serif;
      font-weight: 900;
      font-size: 25px;
      line-height: 37px;
      text-transform: uppercase;

      .blueTitle {
        color: #2d9cdb;
      }
    }
    .form-field {
      padding-top: 200px;
      display: flex;
      flex-direction: column;

      .welcome {
        font-family: Poppins;
        font-weight: 600;
        font-size: 30px;
        line-height: 45px;
        color: #000000;
      }

      .form-field-login {
        margin: 20px 0px;
        width: 380px;
        height: 50px;

        border-radius: 5px;
        .MuiOutlinedInput-root {
          background: rgba(45, 156, 219, 0.1);
        }
      }

      .form-auth-btn {
        width: 380px;
        height: 50px;
        background: #2d9cdb;
        border-radius: 5px;
        color: #fff;
      }

      .auth-checkbox-field {
        display: flex;
        align-items: center;
        width: 380px;
        justify-content: space-between;
        font-family: Poppins;
        font-size: 14px;
        line-height: 21px;
        color: #363636;
        .help-link {
          cursor: pointer;
        }
      }

      .help-link {
        color: #000;
        text-decoration: none;
        span {
          cursor: pointer;
          color: #2d9cdb;
        }
      }
    }
  }
`;
AuthField.defaultProps = {
  submitFunc: () => {},
  handleChange: () => {},
  helpLink: () => {},
  user: {},
  type: "",
  errorMessage: "",
};

AuthField.propTypes = {
  submitFunc: PropTypes.func,
  handleChange: PropTypes.func,
  helpLink: PropTypes.func,
  user: PropTypes.object,
  type: PropTypes.string,
  errorMessage: PropTypes.number,
  name: PropTypes.string,
};

export default AuthField;
