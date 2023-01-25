import csrfFetch from "./csrf";

export const RECEIVE_RESERVATIONS = "reservations/RECEIVE_RESERVATIONS"
export const RECEIVE_RESERVATION = "reservations/RECEIVE_RESERVATION"
export const REMOVE_RESERVATION = "reservations/REMOVE_RESERVATIONS"


export const receiveReservations = (reservations) => ({
    type: RECEIVE_RESERVATIONS,
    reservations
})

export const receiveReservation = (reservation) => ({
    type: RECEIVE_RESERVATION,
    reservation
})

export const removeReservation = (reservationId) => ({
    type: REMOVE_RESERVATION,
    reservationId
})

export const getReservation = (reservationId) => (state) => {
    return state.reservations ? state.reservations[reservationId] : null
}

export const getReservations = (state) => {
    return state.reservations ? Object.values(state.reservations) : []
}

export const fetchReservations = () => async (dispatch) => {
    const response = await csrfFetch(`/api/reservations`);
    const data = await response.json();
    dispatch(receiveReservations(data));
};

export const fetchReservation = (reservationId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reservations/${reservationId}`);
    const data = await response.json();
    dispatch(receiveReservation(data));
}

export const createReservation = (reservation) => async (dispatch) => {
    const { guestId, listingId, startDate, endDate, numGuests } = reservation;
    const response = await csrfFetch("/api/reservations", {
        method: "POST",
        body: JSON.stringify({
            guestId,
            listingId,
            startDate,
            endDate,
            numGuests
        }),
    });
    const data = await response.json();
    dispatch(receiveReservation(data));
    return response;
};

export const modifyReservation = (reservation) => async (dispatch) => {
    const { id, guestId, listingId, startDate, endDate, numGuests } = reservation;
    const response = await csrfFetch(`/api/reservations/${reservation.id}`, {
        method: "PATCH",
        body: JSON.stringify({
            id,
            guestId,
            listingId,
            startDate,
            endDate,
            numGuests
        }),
    });
    const data = await response.json();
    dispatch(receiveReservation(data));
    return response
};

export const deleteReservation = (reservationId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reservations/${reservationId}`, {
        method: 'DELETE'
    });
    dispatch(removeReservation(reservationId));
    return response
};

const reservationsReducer = (state = {}, action) => {
    const nextState = {...state};

    switch (action.type) {
        case RECEIVE_RESERVATIONS:
            // return {...nextState, ...action.reservations}
            return {...action.reservations}
        case RECEIVE_RESERVATION:
            nextState[action.reservation.id] = action.reservation;
            return nextState;
        case REMOVE_RESERVATION:
            delete nextState[action.reservationId]
            return nextState;
        default:
            return state;
    }
}

export default reservationsReducer;