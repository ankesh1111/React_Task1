// components/Modal.js

import React from 'react';
import Modal from 'react-modal';

const ModalComponent = ({ isOpen, onRequestClose, onSubmit }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Enter your city" />
        <button type="submit">Submit</button>
      </form>
    </Modal>
  );
};

export default ModalComponent;
