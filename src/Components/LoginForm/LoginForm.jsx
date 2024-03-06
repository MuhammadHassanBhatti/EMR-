import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import MainLogo from "../../assets/images/TranscureLogo.png";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import CardText from "react-bootstrap/esm/CardText";
import InputField from "../jsx/Common/InputField/InputField";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    console.log("UserName>>>",username)
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    console.log("Password>>>",password)
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username.trim() || !password.trim()) {
      alert("Fill in all fields");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div>
      <div className="right">
        <img src={MainLogo} alt="TransCure" />
        <p className="login">Login</p>
        <p className="info">Please fill your information</p>

        <Form>
          <Form.Group className="mb-3 input-parent">
            <div className="user-icon">
              <i className="fa-solid fa-user"></i>
            </div>
            <CardText className="mt-4">
              <InputField
                onChange={handleUsernameChange}
                name="username"
                placeholder={"User Name"}
                className="user-name-input"
                type="email"
                padding="10px 50px"
              />
            </CardText>
          </Form.Group>

          <Form.Group className="mb-3 input-parent">
            <div className="user-icon">
              <i className="fa-solid fa-lock"></i>
            </div>
            <CardText>
              <InputField
                onChange={handlePasswordChange}
                name="password"
                placeholder={"Password"}
                className="password-input"
                type="password"
                padding="10px 50px"
              />
            </CardText>
          </Form.Group>

          <Button
            as={Link}
            to="/dashboard"
            className="btn-login"
            variant="primary"
            onClick={handleSubmit}
          >
            Login
          </Button>
          <div className="check-forget">
            <div className="check-field my-3">
              <Form.Check type="checkbox" id="check-btn" label="Remember me" />
            </div>
            <div>
              <Link to="/forget-password" className="forget">
                Forgot Password
              </Link>
            </div>
          </div>
          <div className="signUp-Account">
            <p>
              Don't have an account?{" "}
              <Link to="/sign-up" className="sign-up">
                Sign up today!
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
