import csrfFetch from "./csrf";

export const RECEIVE_REVIEWS = "reviews/RECEIVE_REVIEWS"
export const RECEIVE_REVIEW = "reviews/RECEIVE_REVIEW"


export const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
})

export const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
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

export const createReview = (review) => async (dispatch) => {
    // const { authorId, listingId, authorName, rating, cleanliness, accuracy, communication, location, checkIn, value, review, reviewDate } = review;
    const response = await csrfFetch(`/api/listings/${review.listingId}/reviews`, {
        method: "POST",
        body: JSON.stringify({review}),
    });

    const data = await response.json();
    dispatch(receiveReview(data));
    return response;
};

const reviewsReducer = (state = {}, action) => {
    const nextState = {...state};

    switch (action.type) {
        case RECEIVE_REVIEWS:
            // return {...nextState, ...action.reviews}
            return {...action.reviews}
        case RECEIVE_REVIEW:
            nextState[action.review.id] = action.review;
            return nextState;
        default:
            return state;
    }
}

export default reviewsReducer;
