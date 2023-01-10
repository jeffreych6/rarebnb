import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import "./Modal.css";
import moment from 'moment';

function SignupForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors([]);
    return dispatch(
      sessionActions.signup({ email, password, firstName, lastName, birthDate })
    ).catch(async (res) => {
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

  const handleErrors = (formFieldType) => {
    const errorList = []

    errors.map(error => {
      const fieldType = formFieldType.split(" ").length > 1 ? error.split(" ")[0] + " " + error.split(" ")[1] : error.split(" ")[0]
      const errorMessage = formFieldType.split(" ").length > 1 ? error.split(" ").slice(2).join(" ") : error.split(" ").slice(1).join(" ")

      if (fieldType === formFieldType && !errorList.includes(errorMessage)) {
        errorList.push(errorMessage)
      }
      return null;
    })

    return (
      <ul className="form-field-error">
          {errorList.map(error => <li key={error}><i className="fa-sharp fa-solid fa-circle-exclamation" />{error}</li>)}
      </ul>
    )
  }

  return (
    <>
      <header className="form-header">
        <h1>Sign up</h1>
      </header>

      <div className="form-content">
        <h3 className="login-welcome">Welcome to RareBnB</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-text-box">
            <div className="form-text-box-caption">First Name</div>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              required
            />
          </div>

          <div className="form-text-box">
            <div className="form-text-box-caption">Last Name</div>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              required
            />
          </div>
          <div className="form-field-help">
            Make sure it matches the name on your government ID.
          </div>

          {handleErrors("First name")}
          {handleErrors("Last name")}
          <br />

          <div className="form-text-box">
            <div className="form-text-box-caption">Birthdate</div>
            <input
              type="date"
              value={birthDate}
              max={moment().format("YYYY-MM-DD")}
              onChange={(e) => setBirthDate(e.target.value)}
              placeholder="Birth Date"
              required
            />
          </div>
          <div className="form-field-help">
            To sign up, you need to be at least 18. Your birthday won't be shared with other people who use RareBnB.
          </div>

          {handleErrors("Birth date")}
          <br />

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
          <div className="form-field-help">
              We'll email you trip confirmation and receipts.
          </div>

          {handleErrors("Email")}
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

          {handleErrors("Password")}
          <br />
          
          <h3 className="form-terms-of-service">By selecting&nbsp;
            <span className="form-tos-agree">Agree and continue</span>, I agree to Airbnb’s&nbsp;
            <span className="form-tos-links">Terms of Service</span>,&nbsp;
            <span className="form-tos-links">Payments Terms of Service</span>, and&nbsp;
            <span className="form-tos-links">Nondiscrimination Policy</span> and acknowledge the&nbsp;
            <span className="form-tos-links">Privacy Policy</span>.
          </h3>
          <br />

          <div className="login-form-buttons">
            <button type="submit">Agree and continue</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignupForm;