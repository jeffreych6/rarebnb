import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import StarRating from './StarRating'
import "./index.css";
import moment from 'moment';

function ReviewForm({ reservation }) {
  const sessionUser = useSelector((state) => state.session.user);

  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const [cleanliness, setCleanliness] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [communication, setCommunication] = useState(0);
  const [location, setLocation] = useState(0);
  const [checkIn, setCheckIn] = useState(0);
  const [value, setValue] = useState(0);
  const [errors, setErrors] = useState([]);
  const listingId = reservation.listingId
  const reviewDate = moment().format("YYYY-MM-DD")

  let authorId;
  let authorName;
  if (sessionUser) {
    authorId = sessionUser.id
    authorName = sessionUser.firstName
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    // return dispatch(sessionActions.login({ email, password }))
    //   .catch(async (res) => {
    //     let data;
    //     try {
    //       data = await res.clone().json();
    //     } catch {
    //       data = await res.text();
    //     }
    //     if (data?.errors) setErrors(data.errors);
    //     else if (data) setErrors([data]);
    //     else setErrors([res.statusText]);
    //   });
  };


  return (
    <>
      <header className="form-header">
        <h1>Leave a Review</h1>
      </header>

      <div className="form-content">
        <form onSubmit={handleSubmit}>
        Rating: <StarRating rating = {rating} setRating = {setRating}/>
        Cleanliness: <StarRating rating = {cleanliness} setRating = {setCleanliness}/>
        Accuracy: <StarRating rating = {accuracy} setRating = {setAccuracy}/>
        Communication: <StarRating rating = {communication} setRating = {setCommunication}/>
        Location: <StarRating rating = {location} setRating = {setLocation}/>
        Check-in: <StarRating rating = {checkIn} setRating = {setCheckIn}/>
        Value: <StarRating rating = {value} setRating = {setValue}/>
        Comment: <textarea />
        <button type="submit">Submit</button>
        </form>
      </div>
        
        {/* <form onSubmit={handleSubmit}>
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
        </form> */}
      {/* </div> */}
    </>
  );
}

export default ReviewForm;