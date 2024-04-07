import React, { useState } from 'react';
import Modal from 'react-modal';

import './index.css'

const Header = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
    
    return(
        <div className="header">
            <div className = "header-details">
                <h2>Become ACCA In 18 months</h2>
                <p>Amidst the whispering leaves, dreams dance with the wind,In the embrace of twilight, secrets find their refuge.</p>
                <ul className="list-container">
                    <li>
                        <div className="heading-box">
                            <h4 className="box-heading">Enrollment</h4>
                            <p className="box-number">573</p>
                        </div>
                    </li>
                    <li>
                        <div className="heading-box">
                            <h4 className="box-heading">Enrollment</h4>
                            <p className="box-number">573</p>
                        </div>
                    </li>
                    <li>
                        <div className="heading-box">
                            <h4 className="box-heading">Enrollment</h4>
                            <p className="box-number">573</p>
                        </div>
                    </li>
                    <li>
                        <div className="heading-box">
                            <h4 className="box-heading">Enrollment</h4>
                            <p className="box-number">573</p>
                        </div>
                    </li>
                </ul>
                <div>
                    <button className="register-button">Register</button>
                    <button className="login-button">login</button>
                </div>
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

export default Header