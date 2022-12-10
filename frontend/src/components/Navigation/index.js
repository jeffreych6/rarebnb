import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navigation.css";
import NavDropDown from '../NavDropDown';

function Navigation() {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <NavDropDown user={sessionUser} />;
  } else {
    sessionLinks = <NavDropDown />;
  }

  return (
    <nav className="nav-bar-container">
      <div className="nav-bar">
      <NavLink exact to="/">
        <button className="logo-button">
          <h1><i className="fa-brands fa-airbnb"></i> rarebnb</h1>
        </button>
      </NavLink>
      <div className="search-bar">Search Bar</div>
      {sessionLinks}
      </div>
    </nav>
  );
}

export default Navigation;
