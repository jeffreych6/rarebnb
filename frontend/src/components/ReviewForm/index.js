import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import * as reviewsActions from "../../store/reviews";

import StarRating from './StarRating'
import "./index.css";
import moment from 'moment';

function ReviewForm({ reservation }) {
  const sessionUser = useSelector((state) => state.session.user);

  const dispatch = useDispatch();
  const history = useHistory();

  const [rating, setRating] = useState(0);
  const [cleanliness, setCleanliness] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [communication, setCommunication] = useState(0);
  const [location, setLocation] = useState(0);
  const [checkIn, setCheckIn] = useState(0);
  const [value, setValue] = useState(0);
  const [review, setReview] = useState("")
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
    history.push(`/listings/${listingId}`) 

    setErrors([]);

    return dispatch(
      reviewsActions.createReview({ authorId, listingId, authorName, rating, cleanliness, accuracy, communication, location, checkIn, value, review, reviewDate})
      ).catch(async (res) => {
        let data;

        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  };

  console.log(rating)
  console.log(cleanliness)
  console.log(accuracy)
  console.log(communication)
  console.log(location)
  console.log(checkIn)
  console.log(value)
  console.log(review)



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
        Comment: <textarea onChange={(e) => setReview(e.target.value)}/>
        <button type="submit">Submit</button>
        </form>
      </div>
        
    </>
  );
}

export default ReviewForm;