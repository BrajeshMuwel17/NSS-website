import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './welcome.css';

function Welcome() {
    const [redirectToAdd, setRedirectToAdd] = useState(false);
    const [redirectToCreate, setRedirectToCreate] = useState(false);
    const [redirectToLogout, setRedirectToLogout] = useState(false);
    const [email,setEmail] = useState(localStorage.getItem('email'));
    const [password,setPassword] = useState(localStorage.getItem('password'));

    function addMember(e) {
        e.preventDefault();
        setRedirectToAdd(true);
    }

    function createPost(e) {
        e.preventDefault();
        setRedirectToCreate(true);
    }

    function logout(e) {
        e.preventDefault();
        setRedirectToLogout(true);
    }

    if (redirectToAdd) {
        return <Navigate to={'/member'} />
    }

    if (redirectToCreate) {
        return <Navigate to={'/post'} />
    }

    if (redirectToLogout) {
        // Perform logout functionality here
        localStorage.clear();
        return <Navigate to={'/'} />

    }
if (email === 'aryan.arya@iitg.ac.in' && password === 'nss') {
    return (
        <div className="welcome-background">
            <div className="background-image"></div>
            <div className='welcome-content'>
                <h1>Welcome to our website!</h1>
                <p>Thank you for visiting. We hope you enjoy your stay.</p>
                <div className='Buttons'>
                    <button onClick={addMember}>
                        Add Members
                    </button>
                    <button onClick={createPost}>
                        Create a Post
                    </button>
                    <button className="logout-button" onClick={logout}>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}
}
export default Welcome;
