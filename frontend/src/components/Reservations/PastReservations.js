import React, { useState } from "react";
import { Modal } from '../../context/Modal';
import ReviewForm from '../ReviewForm';
import "./PastReservations.css";

function PastReservations({ reservation }) {
    const [showReviewModal, setShowReviewModal] = useState(false);

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
            <div className="past-reservation-container" onClick={() => setShowReviewModal(true)}>
                <img className="past-reservation-image" src={reservation.photosUrl[0]} />
                <div className="past-reservation-description">
                    <h1>{reservation.title}</h1>
                    <h2>Hosted by {reservation.firstName} {reservation.lastName}</h2>
                    <h2>{month[reservation.startDate.slice(5, 7)]} {reservation.startDate[8] === "0" ? reservation.startDate.slice(9) : reservation.startDate.slice(8)}{reservation.startDate.slice(5, 7) === reservation.endDate.slice(5, 7) ? "-" : ` - ${month[reservation.endDate.slice(5, 7)]} `}{reservation.endDate[8] === "0" ? reservation.endDate.slice(9) : reservation.endDate.slice(8)}, {reservation.endDate.slice(0, 4)}</h2>
                </div>
            </div>
            
            {showReviewModal && (
                <Modal onClose={() => setShowReviewModal(false)}>
                    <ReviewForm reservation = {reservation} />
                </Modal>
            )}
        </>
    )
}

export default PastReservations;