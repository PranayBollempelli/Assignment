import React, { useState } from 'react';
import Modal from 'react-modal';

import './index.css'

const Kick = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
    
    return(
        <div className="kick-container">
            <div className = "header-details">
                <h2>Kick off your ACCA Prep journey with IndigoLearn</h2>
                <p>Sign-in and get instant access to our FREE course</p>
                <button className="login-button">login</button>
            </div>
            <form className="form-container">
                <h4 className="form-heading">Application for joining the course</h4>
                <input type="text" placeHolder="Name" className = "input-elements" />
                <input type="text" placeHolder="Password" className = "input-elements" />
                <input type="text" placeHolder="Email" className = "input-elements" />
                <input type="text" placeHolder="Contact Number" className = "input-elements" />
                <button type="button" className="button" onClick ={openModal}>Request Call Back</button>
                <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2>Success</h2>
        <button onClick={closeModal}>Close</button>
      </Modal>
            </form>
        </div>
    )
}

export default Kick