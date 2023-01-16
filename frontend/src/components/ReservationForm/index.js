import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as reservationsActions from "../../store/reservations";
import * as listingsUtils from "../../utils/listings_utils"
import "./index.css";
import logo from "../../assets/logo.png"
import moment from 'moment';

function ReservationForm({ listing }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const listingId = listing.id;

  const [startDate, setStartDate] = useState(moment().format("YYYY-MM-DD"))
  const [endDate, setEndDate] = useState(listingsUtils.calculateEndDate(startDate, 6))
  const [numGuests, setNumGuests] = useState("1")
  // const [errors, setErrors] = useState([]);
  const cleaningFee = Math.round(parseInt(listing.price) * 0.5)
  const serviceFee = Math.round(parseInt(listing.price) * 0.15)

  let guestId;
  if (sessionUser) {
    guestId = sessionUser.id
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/reservations") 

    // setErrors([]);
    return dispatch(
      reservationsActions.createReservation({ guestId, listingId, startDate, endDate, numGuests })
    )
    // .catch(async (res) => {
    //   let data;

    //   if (data?.errors) setErrors(data.errors);
    //   else if (data) setErrors([data]);
    //   else setErrors([res.statusText]);
    // });
  };

  return (
    <div className="listing-show-reservations-form">
      <div className="reservation-form-container">

        <div className="reservation-form-header">
          <div className="reservation-form-header-price">
            <span>${listing.price}</span> night
          </div>
          <div className="reservation-form-header-rating">
            <i className="fa-sharp fa-solid fa-star" />
            <span>{listing.rating} ·</span>
            <a href="#reviews">{listing.numRatings} reviews</a>
          </div>
        </div>

        <form className="reservation-form" onSubmit={handleSubmit}>
            <div className="reservation-form-dates-container">
                <div className="reservation-form-start-date">
                    <div className="reservation-form-text">CHECK-IN</div>
                    <input 
                      className="reservation-form-date-input"
                      type="date"
                      value={startDate}
                      min={moment().format("YYYY-MM-DD")}
                      max={listingsUtils.calculateEndDate(endDate, -0.5)}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>

                <div className="reservation-form-end-date">
                  <div className="reservation-form-text">CHECKOUT</div>
                  <input 
                    className="reservation-form-date-input"
                    type="date"
                    value={endDate}
                    min={listingsUtils.calculateEndDate(startDate, 2)}
                    onChange={(e) => setEndDate(e.target.value)}
                    // onKeyDown={(e) => e.preventDefault()} // Disable typing in date
                  />
                </div>
            </div>

            <div className="reservation-form-guests-container">
              <div className="reservation-form-guests">
                <div className="reservation-form-text">GUESTS</div>
                <input 
                  className="reservation-form-guests-input"
                  type="number"
                  value={numGuests}
                  min="1"
                  max={listing.guests}
                  onChange={(e) => setNumGuests(e.target.value)}
                  // onKeyDown={(e) => e.preventDefault()} // Disable typing in date
                />
              </div>
            </div>

          <ul className="reservation-form-errors">
            {numGuests > listing.guests && 
              <li><i className="fa-sharp fa-solid fa-circle-exclamation" /> Exceeded max number of guests</li>
            }
            {numGuests <= 0 && 
              <li><i className="fa-sharp fa-solid fa-circle-exclamation" /> Invalid number of guests</li>
            }
            {endDate < startDate && 
              <li><i className="fa-sharp fa-solid fa-circle-exclamation" /> Check-in date cannot be later than Checkout date</li>
            }
            {startDate < moment().format("YYYY-MM-DD") &&
              <li><i className="fa-sharp fa-solid fa-circle-exclamation" /> Invalid Check-in date</li>
            }
          </ul>

          {sessionUser ? <button className="reservation-form-button" type="submit">Reserve</button> : <button className="reservation-form-button-disabled" type="submit" disabled>Reserve</button>}
        </form>

        <div className="reservation-form-rows">
          <div className="reservation-form-row-type">${listing.price.toLocaleString("en-US")} x {listingsUtils.calculateDays(startDate, endDate)} nights</div>
          <div className="reservation-form-row-price">${(listing.price * listingsUtils.calculateDays(startDate, endDate)).toLocaleString("en-US")}</div>
        </div>
        <div className="reservation-form-rows">
          <div className="reservation-form-row-type">Cleaning fee</div>
          <div className="reservation-form-row-price">${cleaningFee.toLocaleString("en-US")}</div>
        </div>
        <div className="reservation-form-rows">
          <div className="reservation-form-row-type">Service fee</div>
          <div className="reservation-form-row-price">${(serviceFee * listingsUtils.calculateDays(startDate, endDate)).toLocaleString("en-US")}</div>
        </div>
        <div className="reservation-form-divider"></div>
        <div className="reservation-form-rows">
          <div className="reservation-form-row-total">Total before tax</div>
          <div className="reservation-form-row-total">${(listing.price * listingsUtils.calculateDays(startDate, endDate) + cleaningFee + serviceFee * listingsUtils.calculateDays(startDate, endDate)).toLocaleString("en-US")}</div>
        </div>
      </div>

      <div className="rare-find-container">
          <div className="rare-find">
            <div className="rare-find-text">
              <span>This is a rare find.</span> {listing.firstName}'s place on RareBnb is usually fully booked.
            </div>
            <img className="rare-find-logo" src={logo} alt="logo"/>
          </div>
      </div>
    </div>
  );
}

export default ReservationForm;