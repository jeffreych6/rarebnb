import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as reservationsActions from "../../store/reservations";
import { useSelector, useDispatch } from "react-redux";
import "./ReservationForm.css";
import logo from "../../assets/logo.png"
import moment from 'moment';

function ReservationForm({ listing }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const listingId = listing.id;

  const calculateEndDate = (startDate, days) => {
    const date = new Date(Date.parse(startDate) + (days * 1000 * 3600 * 24))
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    if (month > 12) {
      month = month % 12
    }

    return (`${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`)
  }

  const calculateDays = (startDate, endDate) => {
    return (Date.parse(endDate) - Date.parse(startDate)) / (1000 * 3600 * 24)
  }

  const [startDate, setStartDate] = useState(moment().format("YYYY-MM-DD"))
  const [endDate, setEndDate] = useState(calculateEndDate(startDate, 6))
  const [numGuests, setNumGuests] = useState("1")
  const [errors, setErrors] = useState([]);
  const cleaningFee = Math.round(parseInt(listing.price) * 0.5)
  const serviceFee = Math.round(parseInt(listing.price) * 0.15)

  let guestId;
  if (sessionUser) {
    guestId = sessionUser.id
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/reservations")

    setErrors([]);
    return dispatch(
        reservationsActions.createReservation({ guestId, listingId, startDate, endDate, numGuests })
    ).catch(async (res) => {
        let data;

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
    <>
      <div className="reservation-form-container">
        <div className="reservation-form-header">
          <div className="reservation-form-header-price">
            <span>${listing.price}</span> night
          </div>
          <div className="reservation-form-header-rating">
            <i className="fa-sharp fa-solid fa-star"></i><span>5.0</span>
          </div>
        </div>

        <form className="reservation-form" onSubmit={handleSubmit}>
          <div className="reservation-form-inputs">
            <div className="reservation-form-dates-container">
                <label className="reservation-form-start-date">
                    <div className="reservation-form-date-text">CHECK-IN</div>
                    <input 
                      className="reservation-form-date-input"
                      type="date"
                      value={startDate}
                      min={moment().format("YYYY-MM-DD")}
                      max={calculateEndDate(endDate, -0.5)}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                </label>

                <label className="reservation-form-end-date">
                  <div className="reservation-form-date-text">CHECKOUT</div>
                  <input 
                    className="reservation-form-date-input"
                    type="date"
                    value={endDate}
                    min={calculateEndDate(startDate, 2)}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </label>
            </div>
            <label className="reservation-form-guests">
              <div className="reservation-form-guests-text">GUESTS</div>
              <input 
                className="reservation-form-guests-input"
                type="number"
                value={numGuests}
                min="1"
                max={listing.guests}
                onChange={(e) => setNumGuests(e.target.value)}
              />
            </label>
          </div>
          {handleErrors("End date")}
          <br />
          {sessionUser ? 
            <button className="reservation-form-button" type="submit">Reserve</button> : <button className="reservation-form-button" type="submit" disabled>Reserve</button>
          }
        </form>

        <div className="reservation-form-rows">
          <div className="reservation-form-row-type">${listing.price.toLocaleString("en-US")} x {calculateDays(startDate, endDate)} nights</div>
          <div className="reservation-form-row-price">${(listing.price * calculateDays(startDate, endDate)).toLocaleString("en-US")}</div>
        </div>
        <div className="reservation-form-rows">
          <div className="reservation-form-row-type">Cleaning fee</div>
          <div className="reservation-form-row-price">${cleaningFee.toLocaleString("en-US")}</div>
        </div>
        <div className="reservation-form-rows">
          <div className="reservation-form-row-type">Service fee</div>
          <div className="reservation-form-row-price">${(serviceFee * calculateDays(startDate, endDate)).toLocaleString("en-US")}</div>
        </div>
        <div className="reservation-form-divider"></div>
        <div className="reservation-form-rows">
          <div className="reservation-form-row-total">Total before tax</div>
          <div className="reservation-form-row-total">${(listing.price * calculateDays(startDate, endDate) + cleaningFee + serviceFee * calculateDays(startDate, endDate)).toLocaleString("en-US")}</div>
        </div>
      </div>

      <div className="rare-find-container">
          <div className="rare-find">
            <div className="rare-find-text">
              <span>This is a rare find.</span> {listing.firstName}'s place on RareBnb is usually fully booked.
            </div>
            <div className="rare-find-logo">
              <img src={logo}/>
            </div>
          </div>
      </div>

    </>
  );
}

export default ReservationForm;