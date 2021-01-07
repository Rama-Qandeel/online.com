import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const handleChange = (event) => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    }
    if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  };

  const validate = () => {
    let errorEmail = "";
    let errorPassword = "";
    if (!email.length) {
      errorEmail = "Invalid email";
    }
    if (!password.length) {
      errorPassword = "Invalid password";
    }
    if (errorEmail || errorPassword) {
      setErrorEmail(errorEmail);
      setErrorPassword(errorPassword);

      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    const isValidate = validate();
    if (isValidate) {
      setErrorEmail("");
      setErrorPassword("");
      const data = {
        email: email,
        password: password,
      };
      axios
        .post("/login", data)
        .then((response) => {
          if (response.data === "Invalid login check your email") {
            return setErrorEmail("Invalid email");
          }
          if (response.data === "Invalid login check your password") {
            return setErrorPassword("Invalid password");
          }
          if (response.data) {
            localStorage.setItem("token", response.data);
            props.history.push("/home");
          }
        })
        .catch((error) => {
          if (error) {
            throw error;
          }
        });
    }
  };

  return (
    <div className="">
      <header className="header">
        <div className="header__text-box">
          <div className="heading-primary">
            <h1 class="heading-primary">
              <span class="heading-primary-main">Login</span>
            </h1>
            <h3 class="heading-primary-sub">Login to your account</h3>
            <div class="section-btn">
              <div className="">
                <input
                  class="login_input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div
                style={{ fontSize: "12", color: "orange", fontWeight: "600" }}
              >
                {errorEmail}
              </div>
              <div className="login-btn">
                <input
                  class="login_input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={handleChange}
                  required
                />
                <div
                  style={{ fontSize: "12", color: "orange", fontWeight: "600" }}
                >
                  {errorPassword}
                </div>
              </div>

              <button
                class="btn btn-green btn--animated btn-login"
                onClick={handleSubmit}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Login;
