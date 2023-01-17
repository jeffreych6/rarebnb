import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as reservationsActions from "../../store/reservations";
import * as sessionActions from "../../store/session";
import ReservationMap from "./ReservationMap"
import "./Reservations.css";
import moment from 'moment';


function ReservationModal({ reservation, setShowReservationModal }) {
  const dispatch = useDispatch();
  const id = reservation.id;
  const guestId = reservation.guestId;
  const listingId = reservation.listingId;
  const [startDate, setStartDate] = useState(reservation.startDate)
  const [endDate, setEndDate] = useState(reservation.endDate)
  const [numGuests, setNumGuests] = useState(reservation.numGuests)
  const [errors, setErrors] = useState([]);
  const cleaningFee = Math.round(parseInt(reservation.price) * 0.5)
  const serviceFee = Math.round(parseInt(reservation.price) * 0.15)

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowReservationModal(false)
    return dispatch(
      reservationsActions.modifyReservation({ id, guestId, listingId, startDate, endDate, numGuests })
    )
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
    <div className="edit-reservation-modal">
        <div className="edit-reservation-form-container">
          <h1 className="edit-reservation-form-header">Change your reservation</h1>
          <br />
          <form className="edit-reservation-form"onSubmit={handleSubmit}>
            <div className="edit-reservation-form-inputs">
              <div className="edit-reservation-form-dates-container">
                <label className="edit-reservation-form-start-date">
                  <div className="edit-reservation-form-date-text">CHECK-IN</div>
                  <input 
                      className="edit-reservation-form-date-input"
                      type="date"
                      value={startDate}
                      min={moment().format("YYYY-MM-DD")}
                      max={calculateEndDate(endDate, -0.5)}
                      onChange={(e) => setStartDate(e.target.value)}
                  />
                </label>


                <label className="edit-reservation-form-end-date">
                  <div className="edit-reservation-form-date-text">CHECKOUT</div>
                  <input 
                      className="edit-reservation-form-date-input"
                      type="date"
                      value={endDate}
                      min={calculateEndDate(startDate, 2)}
                      onChange={(e) => setEndDate(e.target.value)}
                  />
                </label>
              </div>

                <label className="edit-reservation-form-guests">
                <div className="edit-reservation-form-guests-text">GUESTS</div>
                  <input 
                      className="edit-reservation-form-guests-input"
                      type="number"
                      value={numGuests}
                      min="1"
                      max={reservation.guests}
                      onChange={(e) => setNumGuests(e.target.value)}
                  />
                </label>
                  {/* {handleErrors("End date")} */}
              </div>
              <br />
              <button className="edit-reservation-form-button" type="submit">Modify Reservation</button>
          </form>

          <div className="reservation-form-rows">
              <div>${reservation.price.toLocaleString("en-US")} x {calculateDays(startDate, endDate)} nights</div>
              <div>${(reservation.price * calculateDays(startDate, endDate)).toLocaleString("en-US")}</div>
          </div>
          <div className="reservation-form-rows">
              <div>Cleaning fee</div>
              <div>${cleaningFee.toLocaleString("en-US")}</div>
          </div>
          <div className="reservation-form-rows">
              <div>Service fee</div>
              <div>${(serviceFee * calculateDays(startDate, endDate)).toLocaleString("en-US")}</div>
          </div>
          <div className="reservation-form-divider"></div>
          <div className="reservation-form-rows">
              <div>Total before tax</div>
              <div>${(reservation.price * calculateDays(startDate, endDate) + cleaningFee + serviceFee * calculateDays(startDate, endDate)).toLocaleString("en-US")}</div>
          </div>
          <br />
          <button className="edit-reservation-form-button" onClick={() => dispatch(reservationsActions.deleteReservation(reservation.id))}>Cancel Reservation</button>

        </div>

        <ReservationMap reservation={reservation} />
    </div>
  )
}

export default ReservationModal;