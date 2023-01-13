import csrfFetch from "./csrf";

export const RECEIVE_REVIEWS = "reviews/RECEIVE_REVIEWS"
export const ADD_REVIEW = "reviews/ADD_REVIEW"


export const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
})

export const addReview = (review) => ({
    type: ADD_REVIEW,
    review
})

export const getReviews = (state) => {
    return state.reviews ? Object.values(state.reviews) : []
}

export const getReview = (listingId) => (state) => {
    return state.reviews ? state.reviews[listingId] : null
}

export const fetchReviews = () => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews`);
    const data = await response.json();
    dispatch(receiveReviews(data));
};

export const fetchReview = (listingId) => async (dispatch) => {
    const response = await csrfFetch(`/api/listings/${listingId}/reviews`);
    const data = await response.json();
    dispatch(receiveReviews(data));
};

const reviewsReducer = (state = {}, action) => {
    const nextState = {...state};

    switch (action.type) {
        case RECEIVE_REVIEWS:
            // return {...nextState, ...action.reviews}
            return {...action.reviews}
        case ADD_REVIEW:
            nextState[action.review.id] = action.review;
            return nextState;
        default:
            return state;
    }
}

export default reviewsReducer;
