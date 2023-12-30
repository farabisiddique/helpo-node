import React from 'react';

const Content = ({ setShowLoginModal }) => {
    return (
        <div className="helpoContent">
            <div className="girl">
                {/* Content for the girl div */}
            </div>
            {/* Introduction */}
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6 col-md-8 p-5 mx-auto text-center welcome-text">
                        <h1 className="welcome-title">Welcome to HELPO!</h1>
                        <p className="lead welcome-subtitle">
                            A unique platform where you can seek help or provide assistance across the globe.
                        </p>
                    </div>
                </div>
            </div>

            {/* CTA Buttons */}
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6 col-md-6 mb-4 text-center">
                        <a href="#" className="btn btn-primary btn-lg btn-help" data-toggle="modal" data-target="#registerModal">I want to Help</a>
                    </div>
                    <div className="col-lg-6 col-md-6 text-center">
                        <a href="#" className="btn btn-success btn-lg btn-need" data-toggle="modal" data-target="#registerModal">I need Help</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
