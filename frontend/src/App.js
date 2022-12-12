import React from "react";
import { Route, Switch } from "react-router-dom";
import ListingIndexPage from "./components/ListingIndexPage";
import ListingShowPage from "./components/ListingShowPage";
import Navigation from "./components/Navigation";
import Reservations from "./components/Reservations";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/reservations">
          <Reservations />
        </Route>
        <Route path="/listings/:listingId">
          <ListingShowPage />
        </Route>
        <Route exact path="/">
          <ListingIndexPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
