import csrfFetch from "./csrf";

export const RECEIVE_USER = "users/RECEIVE_USER"

export const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
})

export const getUser = (userId) => (state) => {
    return state.users ? state.users[userId] : null
}

export const fetchUser = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/${userId}`);
    const data = await response.json();
    dispatch(receiveUser(data.user));
};

const usersReducer = (state = {}, action) => {
    const nextState = {...state};

    switch (action.type) {
        case RECEIVE_USER:
            nextState[action.user.id] = action.user;
            return nextState;
        default:
            return state;
    }
}

export default usersReducer;