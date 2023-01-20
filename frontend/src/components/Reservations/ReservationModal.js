import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as reservationsActions from "../../store/reservations";
import * as listingsUtils from "../../utils/listings_utils"
import ReservationMap from "./ReservationMap"
import "./ReservationModal.css";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowReservationModal(false)

    setErrors([]);
    dispatch(
      reservationsActions.modifyReservation({ id, guestId, listingId, startDate, endDate, numGuests })
    ).catch(async (res) => {
      let data;

      if (data?.errors) setErrors(data.errors);
      else if (data) setErrors([data]);
      else setErrors([res.statusText]);
    });
  };

  return (
    <div className="edit-reservation-modal">
        <div className="edit-reservation-form-container">
          <h1 className="edit-reservation-form-header">Change your reservation</h1>
          <form className="edit-reservation-form" onSubmit={handleSubmit}>
              <div className="edit-reservation-form-dates-container">
                <div className="edit-reservation-form-start-date">
                  <div className="edit-reservation-form-text">CHECK-IN</div>
                  <input 
                      className="edit-reservation-form-date-input"
                      type="date"
                      value={startDate}
                      min={moment().format("YYYY-MM-DD")}
                      max={listingsUtils.calculateEndDate(endDate, -0.5)}
                      onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
                <div className="edit-reservation-form-end-date">
                  <div className="edit-reservation-form-text">CHECKOUT</div>
                  <input 
                      className="edit-reservation-form-date-input"
                      type="date"
                      value={endDate}
                      min={listingsUtils.calculateEndDate(startDate, 2)}
                      onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="reservation-form-guests-container">
                <div className="edit-reservation-form-guests">
                  <div className="edit-reservation-form-text">GUESTS</div>
                  <input 
                      className="edit-reservation-form-guests-input"
                      type="number"
                      value={numGuests}
                      min="1"
                      max={reservation.guests}
                      onChange={(e) => setNumGuests(e.target.value)}
                  />
                </div>
            </div>

              <ul className="reservation-form-errors">
              {numGuests > reservation.guests && 
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

            <button className="edit-reservation-form-button" type="submit">Modify Reservation</button>
          </form>

          <div className="edit-reservation-form-rows">
              <div>${reservation.price.toLocaleString("en-US")} x {listingsUtils.calculateDays(startDate, endDate)} nights</div>
              <div className="edit-reservation-form-row-price">${(reservation.price * listingsUtils.calculateDays(startDate, endDate)).toLocaleString("en-US")}</div>
          </div>
          <div className="edit-reservation-form-rows">
              <div>Cleaning fee</div>
              <div className="edit-reservation-form-row-price">${cleaningFee.toLocaleString("en-US")}</div>
          </div>
          <div className="edit-reservation-form-rows">
              <div>Service fee</div>
              <div className="edit-reservation-form-row-price">${(serviceFee * listingsUtils.calculateDays(startDate, endDate)).toLocaleString("en-US")}</div>
          </div>
          <div className="edit-reservation-form-divider"></div>
          <div className="edit-reservation-form-rows">
              <div className="edit-reservation-form-row-total">Total before tax</div>
              <div className="edit-reservation-form-row-total">${(reservation.price * listingsUtils.calculateDays(startDate, endDate) + cleaningFee + serviceFee * listingsUtils.calculateDays(startDate, endDate)).toLocaleString("en-US")}</div>
          </div>
          <button className="edit-reservation-delete-button" onClick={() => dispatch(reservationsActions.deleteReservation(reservation.id))}>Cancel Reservation</button>
        </div>

        <ReservationMap reservation={reservation} />
    </div>
  )
}

export default ReservationModal;