import React from "react";
import { Route, Switch } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop"
import ListingsIndex from "./components/Listings/ListingsIndex";
import ListingShow from "./components/Listings/ListingShow";
import Navigation from "./components/Navigation";
import Reservations from "./components/Reservations";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <Switch>
        <Route path="/reservations">
          <Reservations />
        </Route>
        <Route path="/listings/:listingId">
          <ListingShow />
        </Route>
        <Route exact path="/">
          <ListingsIndex />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
