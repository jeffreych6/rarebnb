import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as reviewsActions from "../../store/reviews";
import StarRating from './StarRating'
import "./index.css";
import moment from 'moment';

function ReviewForm({ reservation }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

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

  const month = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec',
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ((rating && cleanliness && accuracy && communication && location && checkIn && value && review !== 0) && (review)) {
      history.push(`/listings/${listingId}`)
    }
    
    setErrors([]);
    return dispatch(
      reviewsActions.createReview({ authorId, listingId, authorName, rating, cleanliness, accuracy, communication, location, checkIn, value, review, reviewDate})
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

  const handleRatingErrors = () => {
    const ratingErrorTypes = ["Rating", "Cleanliness", "Accuracy", "Communication", "Location", "Check", "Value"]

    for (let i = 0; i < errors.length; i++) {
      for (let j = 0; j < ratingErrorTypes.length; j++) {
        if (ratingErrorTypes[j] === errors[i].split(" ")[0]) {
          return true
        }
      }
    }

    return false
  }

  const handleCommentError = () => {
    for (let i = 0; i < errors.length; i++) {
      if (errors[i].split(" ")[0] === "Review") {
        return true
      }
    }

    return false
  }

  return (
    <>
      <header className="review-form-header">Leave a Review</header>
      <div className="review-description">
          <h1>{reservation.title}</h1>
          <h2>Hosted by {reservation.firstName} {reservation.lastName}</h2>
          <h2>{month[reservation.startDate.slice(5, 7)]} {reservation.startDate[8] === "0" ? reservation.startDate.slice(9) : reservation.startDate.slice(8)}{reservation.startDate.slice(5, 7) === reservation.endDate.slice(5, 7) ? "-" : ` - ${month[reservation.endDate.slice(5, 7)]} `}{reservation.endDate[8] === "0" ? reservation.endDate.slice(9) : reservation.endDate.slice(8)}, {reservation.endDate.slice(0, 4)}</h2>
      </div>

      <div className="review-form-content">
        <form onSubmit={handleSubmit}>
          <div className="attribute-ratings-container">
            <div className="attribute-rating">
              <h1>Cleanliness</h1>
              <StarRating rating = {cleanliness} setRating = {setCleanliness}/>
            </div>
            <div className="attribute-rating">
              <h1>Accuracy</h1>
              <StarRating rating = {accuracy} setRating = {setAccuracy}/>
            </div>
            <div className="attribute-rating">
              <h1>Communication</h1>
              <StarRating rating = {communication} setRating = {setCommunication}/>
            </div>
            <div className="attribute-rating">
              <h1>Location</h1>
              <StarRating rating = {location} setRating = {setLocation}/>
            </div>
            <div className="attribute-rating">
              <h1>Check-in</h1>
              <StarRating rating = {checkIn} setRating = {setCheckIn}/>
            </div>
            <div className="attribute-rating">
              <h1>Value</h1>
              <StarRating rating = {value} setRating = {setValue}/>
            </div>
          </div>
          <div className="attribute-rating">
            <h1>Rating</h1>
            <StarRating rating = {rating} setRating = {setRating}/>
          </div>
          <div className="attribute-rating">
            <h1>Comment</h1>
            <textarea className="review-comment" onChange={(e) => setReview(e.target.value)}/>
          </div>
          <ul className="review-form-errors">
            {handleRatingErrors() && 
              <li><i className="fa-sharp fa-solid fa-circle-exclamation" /> Ratings cannot be blank</li>
            }
            {handleCommentError() && 
              <li><i className="fa-sharp fa-solid fa-circle-exclamation" /> Comment cannot be blank</li>
            }
          </ul>
          <button className="review-submit" type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default ReviewForm;