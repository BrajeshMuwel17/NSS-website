import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './welcome.css';

function Welcome() {
    const [redirectToAdd, setRedirectToAdd] = useState(false);
    const [redirectToCreate, setRedirectToCreate] = useState(false);
    function addMember(e) {
        e.preventDefault();
        setRedirectToAdd(true);
        // alert('Add member button clicked!');
    }
    function createPost(e) {
        e.preventDefault();
        setRedirectToCreate(true);
        // alert('Create post button clicked!');
    }
    if(redirectToAdd){
        return <Navigate to={'/member'}/>
    }
    if(redirectToCreate){
        return <Navigate to={'/post'}/>
    }
    return (
        <div className="welcome-background">
            <div className="background-image"></div>
            <div className='welcome-content'>
                <h1>Welcome to our website!</h1>
                <p>Thank you for visiting. We hope you enjoy your stay.</p>
                <div className='Buttons'>
                    <button onClick={addMember} >
                        add members
                    </button>
                    <button onClick={createPost} >
                        create a post
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Welcome;