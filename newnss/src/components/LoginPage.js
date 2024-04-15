import React, { useState } from 'react';
import './Login.css'; // External CSS file for styling

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="loginBackground">
      <div className="container">
        <div className="login-form">
          <h2>Login</h2>
          <input type="email" placeholder="Email" />
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <label className='showPassword'>
                <div className="spContainer">
                <div>
                <input
                    type="checkbox"
                    checked={showPassword}
                    onChange={togglePasswordVisibility}
                    />
                </div>
                <div>
                <p className='spText'>Show Password</p>
                </div> 
                </div>
            </label>
          </div>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
