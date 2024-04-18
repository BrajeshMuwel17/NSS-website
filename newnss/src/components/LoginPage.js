import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import './Login.css'; // External CSS file for styling

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log(email, password);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    setRedirect(true);
  };

  if (redirect && email === 'aryan.arya@iitg.ac.in' && password === 'nss') {
    return <Navigate to={'/welcome'} />;
  }

  return (
    <div className="loginBackground">
      <div className="container">
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
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
            {/* <button >Login</button> */}
            <button type='submit' >Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
