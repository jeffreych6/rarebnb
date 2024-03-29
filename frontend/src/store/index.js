import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./session";
import listingsReducer from "./listings";
import reservationsReducer from "./reservations";
import reviewsReducer from "./reviews"
import usersReducer from "./users"

const rootReducer = combineReducers({
    session: sessionReducer,
    listings: listingsReducer,
    reservations: reservationsReducer,
    reviews: reviewsReducer,
    users: usersReducer
  });

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;