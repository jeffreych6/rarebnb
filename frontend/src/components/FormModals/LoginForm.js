import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./Forms.css";

function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ email, password }))
      .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
        console.log(errors)
      });
  };

  const loginDemo = () => {
    setEmail("demo@user.io")
    setPassword("password")
    dispatch(sessionActions.login({email, password}))
  }

  const handleErrors = () => {
    if (errors[0]) {
      return (
        <ul className="formFieldError">
          <li key={errors[0]}><i className="fa-sharp fa-solid fa-circle-exclamation"></i>{errors[0]}</li>
        </ul>
      )
    }
  }

  return (
    <div class="modal-content">
      <header class="formHeader">
        <div></div>
        <h1>Login</h1>
        <div></div>
      </header>
      <div class="formContent">
        <div class="formContentContainer">
          <h3 class="loginWelcome">Welcome to RareBnB</h3>
          <form onSubmit={handleSubmit}>
            <div class="formTextBox">
              <label className="form-field-box">
                <div class="formTextBoxPlaceholder">
                  <div class="formTextBoxText">Email</div>
                </div>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                />
              </label>
            </div>
            <br />
            <div class="formTextBox">
              <label className="form-field-box">
              <div class="formTextBoxPlaceholder">
                  <div class="formTextBoxText">Password</div>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
              </label>
            </div>
            <div className="form-field-help">
            </div>
            {handleErrors()}
            <div class="loginFormButtons">
              <button type="submit">Log In</button>
              <br />
              <br />
              <button onClick={loginDemo}>Demo User</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;