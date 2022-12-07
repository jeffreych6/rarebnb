import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import FormModals from '../FormModals';
import "./Navigation.css";

function Navigation() {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = <FormModals />;
  }

  return (
    <header className="nav-bar">
      <NavLink exact to="/">
        <h1>RareBnB</h1>
      </NavLink>
      <div>Search Bar</div>
      <ul>
          {sessionLinks}
      </ul>

    </header>
  );
}

export default Navigation;
