import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as reservationsActions from "../../store/reservations";

import { LargeModal } from '../../context/Modal';
import ReservationModal from './ReservationModal'
import "./UpcomingReservations.css";

function UpcomingReservations({ reservation }) {
    const dispatch = useDispatch();
    const [showReservationModal, setShowReservationModal] = useState(false);

    useEffect(() => {
        dispatch(reservationsActions.fetchReservations())
    },[dispatch, showReservationModal])

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

    return (
        <>
            <div className="reservation-container" onClick={() => setShowReservationModal(true)}>
                <div className="reservation-detail-container">
                    <div className="reservation-detail-title">
                        <h1>{reservation.title}</h1>
                        <h2>{titleize(reservation.propertyType)} hosted by {reservation.firstName} {reservation.lastName}</h2>
                    </div>
                    <div className="reservation-detail-description">
                        <div className="reservation-detail-description-dates">
                            <h1>{month[reservation.startDate.slice(5, 7)]} {reservation.startDate.slice(8)} -</h1>
                            <h1>{month[reservation.endDate.slice(5, 7)]} {reservation.endDate.slice(8)}</h1>
                            <h2>{reservation.endDate.slice(0, 4)}</h2>
                        </div>
                        <div className="reservation-detail-description-location">
                            <h1>{reservation.city}, {reservation.state}</h1>
                            <h2>{reservation.country}</h2>
                        </div>
                    </div>
                </div>
                <img className="reservation-image" src={reservation.photosUrl[0]} alt="reservation" />
            </div>
            
            {showReservationModal && (
                <LargeModal onClose={() => setShowReservationModal(false)}>
                    <ReservationModal 
                        reservation={reservation} 
                        showReservationModal={showReservationModal}
                        setShowReservationModal={setShowReservationModal}
                    />
                </LargeModal>
            )}
        </>
    )
}

export default UpcomingReservations;