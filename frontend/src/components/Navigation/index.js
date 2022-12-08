import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
// import ProfileButton from "./ProfileButton";
// import FormModals from '../FormModals';
import "./Navigation.css";
import NavDropDown from '../NavDropDown';
// import LoggedInDropDown from "./LoggedInDropDown";
// import LoggedOutDropDown from "./LoggedOutDropDown";

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
