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

export const createReservation = (reservation) => async (dispatch) => {
    const response = await csrfFetch("/api/reservations", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({reservation})
    });
    const data = await response.json();
    dispatch(receiveReservation(data));
};

export const modifyReservation = (reservation) => async (dispatch) => {
    const response = await csrfFetch(`/api/reservations/${reservation.id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({reservation})
    });
    const data = await response.json();
    dispatch(receiveReservation(data));
};

export const deleteReservation = (reservationId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reservations/${reservationId}`, {
        method: 'DELETE'
    });

    dispatch(removeReservation(reservationId));
};

const reservationsReducer = (state = {}, action) => {
    const nextState = {...state};

    switch (action.type) {
        case RECEIVE_RESERVATIONS:

            return {...nextState, ...action.reservations}
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