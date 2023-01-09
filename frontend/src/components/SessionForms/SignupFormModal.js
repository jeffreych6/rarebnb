import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./Modal.css";
import moment from 'moment';

function SignupForm() {
  const dispatch = useDispatch();
  // const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [errors, setErrors] = useState([]);

  // if (sessionUser) return <Redirect to="/" />;

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
          {errorList.map(error => <li key={error}><i className="fa-sharp fa-solid fa-circle-exclamation"></i>{error}</li>)}
      </ul>
    )
  }

  return (
    <div className="modal-content">
      <header className="form-header">
        <div></div>
        <h1>Sign up</h1>
        <div></div>
      </header>
      <div className="form-content">
        <div className="form-content-container">
          <h3 className="login-welcome">Welcome to RareBnB</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-text-box">
              <label className="form-field-box">
              <div className="form-text-box-placeholder">
                  <div className="form-text-box-text">First Name</div>
                </div>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                  required
                />
              </label>
            </div>
            <div className="form-text-box">
              <label className="form-field-box">
              <div className="form-text-box-placeholder">
                  <div className="form-text-box-text">Last Name</div>
                </div>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                  required
                />
              </label>
            </div>
            <div className="form-field-help">
              <h3 className="form-field-help-text">Make sure it matches the name on your government ID.</h3>
            </div>
            {handleErrors("First name")}
            {handleErrors("Last name")}
            <br />
            <div className="form-text-box">
              <label className="form-field-box-birth-date">
              <div className="form-text-box-placeholder">
                  <div className="form-text-box-text">Birthdate</div>
                </div>
                <input
                  type="date"
                  value={birthDate}
                  max={moment().format("YYYY-MM-DD")}
                  onChange={(e) => setBirthDate(e.target.value)}
                  placeholder="Birth Date"
                  required
                />
              </label>
            </div>
            <div className="form-field-help">
              <h3 className="form-field-help-text">To sign up, you need to be at least 18. Your birthday won't be shared with other people who use RareBnB.</h3>
            </div>
            {handleErrors("Birth date")}
            <br />
            <div className="form-text-box">
              <label className="form-field-box">
                <div className="form-text-box-placeholder">
                  <div className="form-text-box-text">Email</div>
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
            <div className="form-field-help">
              <h3 className="form-field-help-text">We'll email you trip confirmation and receipts.</h3>
            </div>
            {handleErrors("Email")}
            <br />
            <div className="form-text-box">
              <label className="form-field-box">
              <div className="form-text-box-placeholder">
                  <div className="form-text-box-text">Password</div>
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
            {handleErrors("Password")}
            <br />
            <h3 className="form-terms-of-service">By selecting
            <span className="form-tos-agree"> Agree and continue</span>, I agree to Airbnb’s 
            <span className="form-tos-links"> Terms of Service</span>, 
            <span className="form-tos-links"> Payments Terms of Service</span>,and 
            <span className="form-tos-links"> Nondiscrimination Policy</span> and acknowledge the 
            <span className="form-tos-links"> Privacy Policy</span>.
            </h3>
            <br />
            <div className="login-form-buttons">
              <button type="submit">Agree and continue</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;