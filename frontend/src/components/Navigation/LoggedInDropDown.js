import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import './DropDown.css'

function LoggedInDropDown() {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button className="menu-button" onClick={openMenu}>
        <i id="hamburger-icon" className="fa-sharp fa-solid fa-bars" />
        <i id="profile-icon" className="fa-solid fa-user-circle" />
      </button>
      
      {showMenu && (
        <ul className="profile-dropdown">
          <li className="drop-down-menu-options-container"><div className="drop-down-menu-options-bold">Messages</div></li>
          <NavLink className="drop-down-reservations-link" to="/reservations">
            <li className="drop-down-menu-options-container-link"><div className="drop-down-menu-options-bold">Trips</div></li>
          </NavLink>
          <li className="drop-down-menu-options-container"><div className="drop-down-menu-options-bold">Wishlist</div></li>
          <div className="drop-down-menu-divider"></div>
          <li className="drop-down-menu-options-container"><div className="drop-down-menu-options">Help</div></li>
          <li className="drop-down-menu-options-container-link" onClick={handleLogOut}><div className="drop-down-menu-options">Log Out</div></li>
        </ul>
      )}
    </>
  );
}

export default LoggedInDropDown;