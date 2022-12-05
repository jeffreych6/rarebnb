import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css";

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
      });
  };

  const loginDemo = () => {
    setEmail("demo@user.io")
    setPassword("password")
    dispatch(sessionActions.login({email, password}))
  }

  return (
    <div class="modal-content">
      <header class="formHeader">
        <h1>Login</h1>
      </header>
      <div class="formContent">
        <form onSubmit={handleSubmit}>
          <ul>
            {errors.map(error => <li key={error}>{error}</li>)}
          </ul>
          <div class="formTextBox">
            <label>
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
            <label>
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
          <br />
          <br />
          <div class="loginFormButtons">
            <button type="submit">Log In</button>
            <br />
            <br />
            <button onClick={loginDemo}>Demo User</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;