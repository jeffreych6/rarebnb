import csrfFetch from "./csrf";

export const SET_LISTINGS = "listings/setListings"
export const ADD_LISTING = "listings/addListings"

export const setListings = (listings) => ({
    type: SET_LISTINGS,
    listings
})

export const addListing = (listing) => ({
    type: ADD_LISTING,
    listing
})

export const fetchListings = () => async (dispatch) => {
    const response = await csrfFetch(`/api/listings`);
    const data = await response.json();
    dispatch(setListings(data));
};

export const fetchListing = (listingId) => async (dispatch) => {
    const response = await csrfFetch(`/api/listings/${listingId}`);
    const data = await response.json();
    dispatch(addListing(data));
};

const listingsReducer = (state = {}, action) => {
    const nextState = {...state};

    switch (action.type) {
        case SET_LISTINGS:
            return {...nextState, ...action.listings}
        case ADD_LISTING:
            nextState[action.listing.id] = action.listing;
            return nextState;
        default:
            return state;
    }
}

export default listingsReducer;