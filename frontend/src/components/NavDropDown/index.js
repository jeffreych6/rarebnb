import React, { useState, useEffect } from "react";
import LoggedInDropDown from "./LoggedInDropDown";
import LoggedOutDropDown from "./LoggedOutDropDown";
// import { useDispatch } from "react-redux";
// import * as sessionActions from "../../store/session";
import "./NavDropDown.css";

function NavDropDown({ user }) {
  const [showMenu, setShowMenu] = useState(false);

  let dropDownLinks;
  if (user) {
    dropDownLinks = <LoggedInDropDown user={user} />;
  } else {
    dropDownLinks = <LoggedOutDropDown />;
  }
    
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    // document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  return (
    <div>
      <button onClick={openMenu}>
        <i className="fa-solid fa-user-circle" />
      </button>
      
      {showMenu && (
        <ul className="profile-dropdown">
          {dropDownLinks}
        </ul>
      )}
    </div>
  );
}

export default NavDropDown;