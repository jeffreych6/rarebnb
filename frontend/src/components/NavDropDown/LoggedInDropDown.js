import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";

function LoggedInDropDown({ user }) {
    const dispatch = useDispatch();
    const handleLogOut = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

  return (
    <>
      <li className="drop-down-menu-options-container"><div className="drop-down-menu-options">Messages</div></li>
      <li className="drop-down-menu-options-container"><div className="drop-down-menu-options">Trips</div></li>
      <li className="drop-down-menu-options-container"><div className="drop-down-menu-options">Wishlist</div></li>
      <div className="drop-down-menu-divider"></div>
      <li className="drop-down-menu-options-container"><div className="drop-down-menu-options">Help</div></li>
      <li className="drop-down-menu-options-container" onClick={handleLogOut}><div className="drop-down-menu-options">Log Out</div></li>
    </>
  );
}

export default LoggedInDropDown;