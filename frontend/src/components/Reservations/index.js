import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import UpcomingReservations from './UpcomingReservations'
import PastReservations from "./PastReservations";
import * as reservationsActions from "../../store/reservations";
import "./index.css";

function Reservations() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const reservations = useSelector(state => Object.values(state.reservations))
    
    useEffect(() => {
        dispatch(reservationsActions.fetchReservations())
    },[dispatch])

    if (!sessionUser) return <Redirect to="/" />;

    const upcomingReservationsList = (reservations) => {
        const upcomingReservations = []
        
        reservations.forEach((reservation) => {
            if (Date.parse(reservation.endDate) > Date.now()) {
                upcomingReservations.push(reservation)
            }
        })

        return upcomingReservations
    }

    const pastReservationsList = (reservations) => {
        const pastReservationsList = []
        
        reservations.forEach((reservation) => {
            if (Date.parse(reservation.endDate) < Date.now()) {
                pastReservationsList.push(reservation)
            }
        })

        return pastReservationsList
    }

    const upcomingReservations = upcomingReservationsList(reservations).map((reservation) => {
        return (
            <UpcomingReservations key={reservation.id} reservation={reservation} />
        )
    })

    const pastReservations = pastReservationsList(reservations).map((reservation) => {
        return (
            <PastReservations key={reservation.id} reservation={reservation} />
        )
    })


    return (
        <div className="reservations-index-container">
            <h1 className="reservations-index-trips">Trips</h1>
            <div className="reservation-index-reservations">Upcoming reservations</div>
            {upcomingReservations.length > 0 ? 
                upcomingReservations 
                : 
                <div className="no-reservations-message">You have no upcoming reservations</div>
            }

            <div className="reservation-index-reservations">Where you've been</div>
            {pastReservations.length > 0 ? 
                <div className="reservation-container-past-trips">
                    {pastReservations} 
                </div>
                : 
                <div className="no-reservations-message">You have no past reservations</div>
            }
        </div>
    )
}

export default Reservations;