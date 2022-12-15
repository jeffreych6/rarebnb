import csrfFetch from "./csrf";

export const RECEIVE_REVIEWS = "reviews/RECEIVE_REVIEWS"

export const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
})

export const getReviews = (state) => {
    return state.reviews ? Object.values(state.reviews) : []
}

export const fetchReviews = () => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews`);
    const data = await response.json();
    dispatch(receiveReviews(data));
};

const reviewsReducer = (state = {}, action) => {
    const nextState = {...state};

    switch (action.type) {
        case RECEIVE_REVIEWS:
            return {...nextState, ...action.reviews}
        default:
            return state;
    }
}

export default reviewsReducer;
