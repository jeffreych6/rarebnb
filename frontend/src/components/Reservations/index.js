import React, { useEffect, useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from '../../context/Modal';
import ReservationModal from './ReservationModal'
import ReservationIndexItem from './ReservationIndexItem'
import ReservationPastTrips from "./ReservationPastTrips";
import * as reservationsActions from "../../store/reservations";
import "./Reservations.css";
import moment from 'moment'

function Reservations() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const reservations = useSelector(state => Object.values(state.reservations))
    const [showReservationModal, setShowReservationModal] = useState(false);

    
    useEffect(() => {
        dispatch(reservationsActions.fetchReservations())
    },[])

    if (!sessionUser) return <Redirect to="/" />;

    const titleize = (word) => {
        return word[0].toUpperCase() + word.slice(1)
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
            <ReservationIndexItem key={reservation.id} reservation={reservation} />
        )
    })

    const pastReservations = pastReservationsList(reservations).map((reservation) => {
        return (
            <ReservationPastTrips key={reservation.id} reservation={reservation} />
        )
    })


    return (
        <div className="reservations-index-container">
            <h1 className="reservations-index-trip-title">
                Trips
            </h1>
            <div className="reservation-index-upcoming-reservations">
                Upcoming reservations
                {/* Upcoming reservations ({upcomingReservationsList.length}) */}
            </div>
            {upcomingReservations}
            <div className="reservation-index-upcoming-reservations">
                Where you've been
                {/* Where you've been ({pastReservationsList.length}) */}
            </div>
            {pastReservations}
        </div>
    )
}

export default Reservations;