import React, { useState, useEffect } from "react";
import * as reservationsActions from "../../store/reservations";
import { useSelector, useDispatch } from "react-redux";
import "./ReservationForm.css";
import moment from 'moment';

function ReservationForm({ listing }) {
  const dispatch = useDispatch();
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

  const [guestId, setGuestId] = useState("")
  const [startDate, setStartDate] = useState(moment().format("YYYY-MM-DD"))
  const [endDate, setEndDate] = useState(calculateEndDate(startDate, 6))
  const [numGuests, setNumGuests] = useState("1")
  const [errors, setErrors] = useState([]);

  if (sessionUser) {
    setGuestId = sessionUser.id
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors([]);
    return dispatch(
        reservationsActions.createReservation({ guestId, listingId, startDate, endDate, numGuests })
    ).catch(async (res) => {
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text();
        }
        debugger
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
    <div className="reservation-form-container">
      <form className="reservation-form" onSubmit={handleSubmit}>
        CHECK-IN
        <input 
          type="date"
          value={startDate}
          min={moment().format("YYYY-MM-DD")}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <br/>
        CHECKOUT
        <input 
          type="date"
          value={endDate}
          min={calculateEndDate(startDate, 2)}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <br />
        GUESTS
        <input 
          type="number"
          value={numGuests}
          min="1"
          onChange={(e) => setNumGuests(e.target.value)}
        />
        {handleErrors("End date")}
        <br />
        <button type="submit">Reserve</button>
      </form>


      <div className="reservation-form-rows">
        <div>${listing.price} x {(Date.parse(endDate) - Date.parse(startDate)) / (1000 * 3600 * 24)} nights</div>
        <div>${listing.price * ((Date.parse(endDate) - Date.parse(startDate)) / (1000 * 3600 * 24))}</div>
      </div>
      <div className="reservation-form-rows">
        <div>Cleaning fee</div>
        <div>$69</div>
      </div>
      <div className="reservation-form-rows">
        <div>Service fee</div>
        <div>$69</div>
      </div>
      <div className="reservation-form-divider"></div>
      <div className="reservation-form-rows">
        <div>Total before tax</div>
        <div>$69</div>
      </div>
    </div>
  );
}

export default ReservationForm;