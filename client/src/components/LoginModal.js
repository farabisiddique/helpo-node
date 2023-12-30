// LoginModal.js
import React from 'react';
import fblogo from './img/fblogo.png';
import googlelogo from './img/googlelogo.png';

const LoginModal = ({ showModal, setShowModal }) => {
    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };
    

    return (
        <>
            {/* Modal */}
            {showModal && (
                <div className="modal display-block" id="loginModal">
                    <div className="modal-dialog">
                        <div className="modal-content helpoModal">
                            <div className="modal-header">
                                <h5 className="modal-title" id="loginModalLabel">Login</h5>
                                <button type="button" className="close text-light" onClick={() => setShowModal(false)}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    {/* Form Fields */}
                                    <div className="form-group">
                                        <label htmlFor="emailLogin">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="emailLogin"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="passwordLogin">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="passwordLogin"
                                            required
                                        />
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-4 d-flex justify-content-end">
                                            <button type="submit" className="btn spectacularBtn mb-3">Login</button>
                                        </div>
                                        <div className="col-md-4 d-flex align-items-center justify-content-start">
                                            <a href="#" className="white-link text-center">Forgot Password?</a>
                                        </div>
                                        <div className="col-md-2"></div>
                                    </div>

                                    <div className="social-login">
                                        <button type="button" className="btn fbBtn btn-block mb-2">
                                            <img src={fblogo} alt="Facebook Logo" className="social-icon" /> Login with Facebook
                                        </button>
                                        
                                        <button type="button" className="btn googleBtn btn-block">
                                            <img src={googlelogo} alt="Google Logo" className="social-icon" /> Login with Google
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default LoginModal;
