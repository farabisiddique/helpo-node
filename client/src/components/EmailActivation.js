import React from 'react';

function EmailActivation() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {/* Activation Link Sent Notification */}
          <div className="alert alert-info" role="alert">
            We've sent an activation link to your email address. Please check your inbox and click the link to activate your account.
          </div>
          
          <h3>OR</h3>
          {/* OTP Input Form */}
          <div className="card">
            <div className="card-header">Enter OTP</div>
            <div className="card-body">
              <p>If you've received the OTP, enter it below to verify your email.</p>
              <form action="/verify-otp" method="post">
                <div className="form-group">
                  <label htmlFor="otp">One-Time Password (OTP)</label>
                  <input type="text" className="form-control" id="otp" name="otp" placeholder="Enter OTP" />
                </div>
                <button type="submit" className="btn btn-primary">Verify</button>
              </form>
            </div>
          </div>
  
          {/* Resend OTP Option */}
          <div className="mt-3">
            Didn't receive the OTP? <a href="/resend-otp">Resend OTP</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailActivation;
