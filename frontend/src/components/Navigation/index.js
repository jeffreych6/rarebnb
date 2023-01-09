import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./index.css";
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
        <div className="left-nav">
          <NavLink exact to="/">
            <button className="logo-button">
              <h1><img src={logo} /> rarebnb</h1>
            </button>
          </NavLink>
        </div>

        <div className="search-bar">
          <div className="search-text-container">
            <div className="search-text-box">
              <input className="search-text" type="text" placeholder="Start your search"/>
            </div>
            <button className="search-button"><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>
        </div>

        <div className="right-nav">
          {sessionLinks}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
