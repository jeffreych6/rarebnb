import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";

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
      <div className="right-nav">
        <button className="menu-button" onClick={openMenu}>
          <i id="hamburger-icon" className="fa-sharp fa-solid fa-bars" />
          <i id="user-icon" className="fa-solid fa-user-circle" />
        </button>
        
        {showMenu && (
          <ul className="profile-dropdown">
            <li className="drop-down-menu-options-container"><div className="drop-down-menu-options">Messages</div></li>
            <li className="drop-down-menu-options-container"><div className="drop-down-menu-options">Trips</div></li>
            <li className="drop-down-menu-options-container"><div className="drop-down-menu-options">Wishlist</div></li>
            <div className="drop-down-menu-divider"></div>
            <li className="drop-down-menu-options-container"><div className="drop-down-menu-options">Help</div></li>
            <li className="drop-down-menu-options-container" onClick={handleLogOut}><div className="drop-down-menu-options">Log Out</div></li>
          </ul>
        )}
      </div>
    </>
  );
}

export default LoggedInDropDown;