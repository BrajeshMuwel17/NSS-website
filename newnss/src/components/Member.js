import './Member_style.css';
import { useState } from 'react';

const Post = () => {

    return (
        <div className='Background'>
            <div className="member-container">
                <div className="member-heading">
                    <h1>Add a Member</h1>
                </div>
                <div className="member-content">
                    <div className="member-name">
                        <input type="text" placeholder=" Name" />
                    </div>
                    
                    <div className="member-designation">
                        <input type="text" placeholder="Designation" />
                    </div>
                    <div className="member-website">
                        <input type="text" placeholder="Website Link" />
                    </div>
                    <div className="member-pic">
                        <h3>Profile Picture</h3>
                        <input type="file" accept="image/*" />
                    </div>
                </div>
                <div className='Submit'>
                    <button>Add</button>
                </div>
            </div>
        </div>
    );
}

export default Post;
