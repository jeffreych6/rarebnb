import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navigation.css";
import LoggedInDropDown from './LoggedInDropDown';
import LoggedOutDropDown from "./LoggedOutDropDown";
import logo from "../../assets/logo.png"

function Navigation() {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <LoggedInDropDown />;
  } else {
    sessionLinks = <LoggedOutDropDown />;
  }

  return (
    <nav className="nav-bar-container">
      <div className="nav-bar">
      <NavLink exact to="/">
        <button className="logo-button">
          <h1><img src={logo} /> rarebnb</h1>
        </button>
      </NavLink>
      <div className="search-bar">Search Bar
        
      </div>
        {sessionLinks}
      </div>
    </nav>
  );
}

export default Navigation;
