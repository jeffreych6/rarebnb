import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function FormModals() {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowSignupModal(true)}>Sign Up</button>
      {showSignupModal && (
        <Modal onClose={() => setShowSignupModal(false)}>
          <SignupForm />
        </Modal>
      )}
      <br />
      <button onClick={() => setShowLoginModal(true)}>Log In</button>
      {showLoginModal && (
        <Modal onClose={() => setShowLoginModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default FormModals;