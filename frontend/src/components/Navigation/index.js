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
    <header className="nav-bar">
      <NavLink exact to="/">
        <button className="logoButton">
          <h1><i className="fa-brands fa-airbnb"></i> rarebnb</h1>
        </button>
      </NavLink>
      <div>Search Bar</div>
      {sessionLinks}
    </header>
  );
}

export default Navigation;
