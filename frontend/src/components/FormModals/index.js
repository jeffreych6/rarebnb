import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function FormModals() {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <>
      <li className="click"onClick={() => setShowSignupModal(true)}>
        <button>Sign Up</button>
      {/* {showSignupModal && (
          <Modal onClose={() => setShowSignupModal(false)}>
              <SignupForm />
          </Modal>
      )} */}
      </li>
      <li onClick={() => setShowLoginModal(true)}>
      <button>Log In</button>
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