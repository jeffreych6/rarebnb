import React, { useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import LoggedInDropDown from './LoggedInDropDown';
import LoggedOutDropDown from "./LoggedOutDropDown";
import "./index.css";
import logo from "../../assets/logo.png"

function Navigation() {
  const history = useHistory();
  const location = useLocation();
  const sessionUser = useSelector((state) => state.session.user);
  const [searchTerm, setSearchTerm] = useState("")

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <LoggedInDropDown />;
  } else {
    sessionLinks = <LoggedOutDropDown />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.length > 0) {
      history.push(`/${searchTerm}`);
    }
  }

  return (
    <nav className={location.pathname.startsWith("/listings/") || location.pathname.startsWith("/reservations") ? "nav-bar-container" : "nav-bar-index-container"}>
      <div className={location.pathname.startsWith("/listings/") || location.pathname.startsWith("/reservations") ? "nav-bar" : "nav-bar-index"}>
      {/* <div className="nav-bar"> */}
        <div className="left-nav">
          <NavLink exact to="/">
            <button className="logo-button">
              <h1><img src={logo} alt="rarbnb-logo"/> rarebnb</h1>
            </button>
          </NavLink>
        </div>

        <div className="search-bar">
          <form className="search-text-container">
            <div className="search-text-box">
              <input 
              className="search-text" 
              type="text" 
              placeholder="Start your search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="search-button" type="submit" onClick={handleSubmit}><i className="fa-solid fa-magnifying-glass"></i></button>
          </form>
        </div>

        <div className="right-nav">
          {sessionLinks}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
