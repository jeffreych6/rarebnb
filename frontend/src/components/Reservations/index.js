import React, { useEffect } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as reservationsActions from "../../store/reservations";
import "./Reservations.css";

function Reservations() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const reservations = useSelector(state => Object.values(state.reservations))
    
    useEffect(() => {
        dispatch(reservationsActions.fetchReservations())
    },[])

    if (!sessionUser) return <Redirect to="/" />;

    const reservation = reservations.map((reservation) => {
        return (
            <div key={reservation.id}>
                {reservation.id}
                <img src={reservation.photosUrl[0]}></img>
            </div>
        )
    })


    return (
        <div className="reservations-index-container">
            <h1 className="reservations-index-trip-title">
                Trips
            </h1>
            <div className="reservation-index-upcoming-reservations">
                Upcoming reservations
            </div>
            {reservation}
        </div>
    )
}

export default Reservations;