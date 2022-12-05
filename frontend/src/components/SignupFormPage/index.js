import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";
import moment from 'moment';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors([]);
    return dispatch(
        sessionActions.signup({ email, password, firstName, lastName, birthDate })
    ).catch(async (res) => {
    let data;
        try {
            // .clone() essentially allows you to read the response body twice
            data = await res.clone().json();
        } catch {
            data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) return setErrors([data]);
        else return setErrors([res.statusText]);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <br />
      <label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
      </label>
      <br />
      <label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
      </label>
      <br />
      <label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          required
        />
      </label>
      <br />
      <label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          required
        />
      </label>
      <br />
      <label>
        <input
          type="date"
          value={birthDate}
          max={moment().format("YYYY-MM-DD")}
          onChange={(e) => setBirthDate(e.target.value)}
          placeholder="Birth Date"
          required
        />
      </label>
      <br />
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignupFormPage;
