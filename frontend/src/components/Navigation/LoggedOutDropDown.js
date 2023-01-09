import React, { useState, useEffect } from "react";
import LoginFormModal from '../SessionForms/LoginFormModal';
import SignupFormModal from '../SessionForms/SignupFormModal';
import { Modal } from '../../context/Modal';
import './DropDown.css'


function LoggedOutDropDown() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

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

  return (
    <>
      {/* <div className="right-nav"> */}
        <button className="menu-button" onClick={openMenu}>
          <i id="hamburger-icon" className="fa-sharp fa-solid fa-bars" />
          <i id="user-icon" className="fa-solid fa-user-circle" />
        </button>

        {showMenu && (
          <ul className="profile-dropdown">
            <li className="drop-down-menu-options-container" onClick={() => setShowSignupModal(true)}>
              <div className="drop-down-menu-options">Sign Up</div>
            </li>
            <li className="drop-down-menu-options-container" onClick={() => setShowLoginModal(true)}>
              <div className="drop-down-menu-options">Log In</div>
            </li>
            <div className="drop-down-menu-divider"></div>
            <li className="drop-down-menu-options-container"><div className="drop-down-menu-options">Rarebnb your home</div></li>
            <li className="drop-down-menu-options-container"><div className="drop-down-menu-options">Host an experience</div></li>
            <li className="drop-down-menu-options-container"><div className="drop-down-menu-options">Help</div></li>
        </ul>
        )}
      {/* </div> */}

      {showSignupModal && (
          <Modal onClose={() => setShowSignupModal(false)}>
              <SignupFormModal />
          </Modal>
      )}
      {showLoginModal && (
        <Modal onClose={() => setShowLoginModal(false)}>
          <LoginFormModal />
        </Modal>
      )}
    </>
  )
}

export default LoggedOutDropDown;