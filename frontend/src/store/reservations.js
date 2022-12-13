import csrfFetch from "./csrf";

export const RECEIVE_RESERVATIONS = "reservations/RECEIVE_RESERVATIONS"
export const ADD_RESERVATION = "reservations/ADD_RESERVATION"
export const UPDATE_RESERVATION = "reservations/UPDATE_RESERVATIONS"
export const REMOVE_RESERVATION = "reservations/REMOVE_RESERVATIONS"


export const receiveReservations = (reservations) => ({
    type: RECEIVE_RESERVATIONS,
    reservations
})

export const addReservation = (reservation) => ({
    type: ADD_RESERVATION,
    reservation
})

export const updateReservation = (reservation) => ({
    type: UPDATE_RESERVATION,
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

// export const fetchListing = (reservationId) => async (dispatch) => {
//     const response = await csrfFetch(`/api/reservations/${reservationId}`);
//     const data = await response.json();
//     dispatch(addListing(data.reservation));
// };

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
    dispatch(addReservation(data.reservation));
    return response;
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
        case ADD_RESERVATION:
            return {...nextState, ...action.reservation}
        case REMOVE_RESERVATION:
            delete nextState[action.reservationId]
            return nextState;
        default:
            return state;
    }
}

export default reservationsReducer;