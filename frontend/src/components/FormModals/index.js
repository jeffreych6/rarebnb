import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function FormModals() {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <>
      <li className="drop-down-menu-options-container" onClick={() => setShowSignupModal(true)}>
        <div className="drop-down-menu-options">Sign Up</div>
      {/* {showSignupModal && (
          <Modal onClose={() => setShowSignupModal(false)}>
              <SignupForm />
          </Modal>
      )} */}
      </li>
      <li className="drop-down-menu-options-container" onClick={() => setShowLoginModal(true)}>
        <div className="drop-down-menu-options">Log In</div>
      {/* {showLoginModal && (
          <Modal onClose={() => setShowLoginModal(false)}>
              <LoginForm />
          </Modal>
      )} */}
      </li>
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
  );
}

export default FormModals;