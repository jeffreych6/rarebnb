import React, { useState, useEffect } from "react";
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { Modal } from '../../context/Modal';

// import { useDispatch } from "react-redux";
// import * as sessionActions from "../../store/session";

function LoggedOutDropDown() {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);





  return (
    <>
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
      {showSignupModal && (
          <Modal onClose={() => setShowSignupModal(false)}>
              <SignupForm />
          </Modal>
      )}
            {showLoginModal && (
          <Modal onClose={() => setShowLoginModal(false)}>
              <LoginForm />
          </Modal>
      )}
      </>
  )
}

export default LoggedOutDropDown;