import React from "react";
import { Route, Switch } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop"
import ListingsIndex from "./components/Listings/ListingsIndex";
import FilteredIndex from "./components/Listings/ListingsIndex/FilteredIndex";
import ListingShow from "./components/Listings/ListingShow";
import Navigation from "./components/Navigation";
import IndexNavBar from "./components/Navigation/IndexNavBar";

import Reservations from "./components/Reservations";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ScrollToTop />
      {/* <Navigation /> */}
      <Switch>
        <Route exact path="/">
          <IndexNavBar />
          <ListingsIndex />
        </Route>
        <Route exact path="/reservations">
          <Navigation />
          <Reservations />
        </Route>
        <Route path="/listings/:listingId">
          <IndexNavBar />
          <ListingShow />
        </Route>
        <Route path="/:filter">
          <IndexNavBar />
          <FilteredIndex />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
