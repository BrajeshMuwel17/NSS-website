import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

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
        <div>
            <h1>Welcome to our website!</h1>
            <p>Thank you for visiting. We hope you enjoy your stay.</p>
            <div className='flex  gap-3'>
                <button onClick={addMember} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    add members
                </button>
                <button onClick={createPost} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    create a post
                </button>
            </div>
        </div>
    );
}

export default Welcome;