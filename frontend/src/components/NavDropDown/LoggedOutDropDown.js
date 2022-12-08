// import React, { useState, useEffect } from "react";
import FormModals from '../FormModals';
// import { useDispatch } from "react-redux";
// import * as sessionActions from "../../store/session";

function LoggedOutDropDown() {
  return (
    <>
      <FormModals />
      <div className="drop-down-menu-divider"></div>
      <li className="drop-down-menu-options-container"><div className="drop-down-menu-options">Rarebnb your home</div></li>
      <li className="drop-down-menu-options-container"><div className="drop-down-menu-options">Host an experience</div></li>
      <li className="drop-down-menu-options-container"><div className="drop-down-menu-options">Help</div></li>
      </>
  )
}

export default LoggedOutDropDown;