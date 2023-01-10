import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./Modal.css";

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
          data = await res.clone().json();
        } catch {
          data = await res.text();
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  };

  const loginDemo = () => {
    setEmail("demo@user.io")
    setPassword("password")
    if (email && password) {
      dispatch(sessionActions.login({email, password}))
    }
  }

  const handleErrors = () => {
    if (errors[0]) {
      return (
        <ul className="form-field-error">
          <li key={errors[0]}><i className="fa-sharp fa-solid fa-circle-exclamation"></i>{errors[0]}</li>
        </ul>
      )
    }
  }

  return (
    <>
      <header className="form-header">
        <h1>Login</h1>
      </header>

      <div className="form-content">
        <h3 className="login-welcome">Welcome to RareBnB</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-text-box">
            <div className="form-text-box-caption">Email</div>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <br />

          <div className="form-text-box">
            <div className="form-text-box-caption">Password</div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          {handleErrors()}

          <div className="login-form-buttons">
            <button type="submit">Log In</button>
            <br />
            <br />
            <button onClick={loginDemo}>Demo User</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginForm;