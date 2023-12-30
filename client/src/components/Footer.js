import React from 'react';
import logo from './img/logo.png'; // Make sure to import your logo image

function Footer() {
    return (
        <footer className="bg-dark text-white mt-5 helpoFooter">
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-6">
                        <h4>
                            <img src={logo} alt="Logo" style={{ maxHeight: '30px', verticalAlign: 'middle' }} />
                        </h4>
                        <p>
                            Connecting seekers and helpers across the world.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <ul className="list-unstyled float-right">
                            <li><a href="#" className="text-white">Terms & Conditions</a></li>
                            <li><a href="#" className="text-white">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
