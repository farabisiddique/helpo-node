import React, { useState } from 'react';
import fblogo from './img/fblogo.png';
import googlelogo from './img/googlelogo.png';
import {validateEmail, validatePassword} from '../functions/formValidation';
import EmailActivation from './EmailActivation';


const RegisterModal = ({ showModal, setShowModal }) => {
    
    const [email, setEmail] = useState('');
    const [emailErrorState, setEmailErrorState] = useState('');

    const [password, setPassword] = useState('');
    const [passErrorState, setPassErrorState] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [toDoOption, toDoChange] = useState(1);  // 1 for want 2 for need 3 for both
    const [activationNeeded, setactivationNeeded] = useState(false);
    // Add other state variables as needed

    


    const handleRegister = async (e) => {
        e.preventDefault();
        console.log(toDoOption);
        
        const emailError = validateEmail(email);
        const passErrorState = validatePassword(password);

        if (emailError) {
            setEmailErrorState(emailError);
            setPassErrorState('');
        } 
        else if (passErrorState) {
            setEmailErrorState('');
            setPassErrorState(passErrorState);
        } 
        else if (password !== confirmPassword) {
            setEmailErrorState('');
            setPassErrorState('Passwords do not match');
            return;
        }
        else{
            setEmailErrorState('');
            try {
                const response = await fetch('http://localhost:3000/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                        userType: toDoOption,
                        // include other data as needed
                    }),
                });
                
                console.log(response);
                const data = await response.json();
                if (response.status === 201) {
                    console.log('Registration successful');
                    // Handle successful registration
                } else {
                    console.log('Registration failed', data.message);
                    // Handle registration failure
                }
            } catch (error) {
                console.error('Registration error:', error);
            }
        }
    
        
    };
    
    



    return (
        <>
            {/* Modal */}
            {showModal && (
                <div className="modal display-block" id="registerModal">
                    <div className="modal-dialog">
                        <div className="modal-content helpoModal">
                            <div className="modal-header">
                                <h5 className="modal-title" id="registerModalLabel">Sign Up</h5>
                                <button type="button" className="close text-light" onClick={() => setShowModal(false)}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleRegister}>
                                    <div className="form-group">
                                        <label htmlFor="emailModal">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="emailModal"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            aria-required
                                        />
                                        <p className='text-white emailError'>{emailErrorState}</p>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="passwordModal">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="passwordModal"
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            aria-required
                                        />
                                        <p className='text-white passError'>{passErrorState}</p>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="confirmPasswordModal">Confirm Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="confirmPasswordModal"
                                            required
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            aria-required
                                        />
                                    </div>
                                    <div className="form-group mb-3 text-center">
                                        <label>What would you like to do?</label><br />
                                        <div className="btn-group btn-group-toggle justify-content-center" data-toggle="buttons">
                                            <label className={`btn btn-help ${toDoOption === 1 ? 'pop-up' : 'pop-down'}`}>
                                                <input
                                                    type="radio"
                                                    name="helpOptions"
                                                    onClick={() => toDoChange(1)}
                                                /> I want to Help
                                            </label>
                                            <label className={`btn btn-both ${toDoOption === 3 ? 'pop-up' : 'pop-down'}`}>
                                                <input
                                                    type="radio"
                                                    name="helpOptions"
                                                    onClick={() => toDoChange(3)}
                                                /> Both
                                            </label>
                                            <label className={`btn btn-need ${toDoOption === 2 ? 'pop-up' : 'pop-down'}`}>
                                                <input
                                                    type="radio"
                                                    name="helpOptions"
                                                    onClick={() => toDoChange(2)}
                                                /> I need Help
                                            </label>
                                            
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn spectacularBtn">Sign Up</button>
                                    </div>

                                    <div className="social-login mt-3">
                                        <button type="button" className="btn fbBtn btn-block mb-2">
                                            <img src={fblogo} alt="Facebook Logo" className="social-icon" /> Signup with Facebook
                                        </button>
                                        
                                        <button type="button" className="btn googleBtn btn-block">
                                            <img src={googlelogo} alt="Google Logo" className="social-icon" /> Signup with Google
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
}

export default RegisterModal;
