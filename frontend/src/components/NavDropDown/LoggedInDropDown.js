import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";

function LoggedInDropDown({user}) {
    const dispatch = useDispatch();
    const handleLogOut = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

  return (
    <>
        <li>Welcome, {user.firstName} {user.lastName}</li>
        <li>
            Messages
        </li>
        <li>
            Trips
        </li>
        <li>
            Wishlist
        </li>
        <li>
            <button onClick={handleLogOut}>Log Out</button>
        </li>
    </>
  );
}

export default LoggedInDropDown;