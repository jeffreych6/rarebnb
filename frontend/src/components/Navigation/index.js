import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import LoggedInDropDown from './LoggedInDropDown';
import LoggedOutDropDown from "./LoggedOutDropDown";
import "./index.css";
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
              <h1><img src={logo} alt="rarbnb-logo"/> rarebnb</h1>
            </button>
          </NavLink>
        </div>

        <div className="right-nav">
          {sessionLinks}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
