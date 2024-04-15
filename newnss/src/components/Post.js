import './Post_style.css';
import { useState } from 'react';

const Post = () => {
    const [selectedHashtag, setSelectedHashtag] = useState('');
    const [eventDate, setEventDate] = useState('');
    const handleHashtagChange = (event) => {
        setSelectedHashtag(event.target.value);
    };
    const handleDateChange = (event) => {
        setEventDate(event.target.value);
    };

    return (
        <div className='Background'>
            <div className="post-container">
                <div className="post-heading">
                    <h1>Post</h1>
                </div>
                <div className="post-content">
                    <div className="post-title">
                        <input type="text" placeholder=" Title" />
                    </div>
                    <div className="post-description">
                        <input type="text" placeholder=" Description" />
                    </div>
                    <div className="post-hashtag">
                        <div>
                            <h3>Hashtag</h3>
                            <label>
                                <input type="radio" value="Cleanliness" checked={selectedHashtag === "Cleanliness"} onChange={handleHashtagChange} />
                                Cleanliness
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" value="Donations" checked={selectedHashtag === "Donations"} onChange={handleHashtagChange} />
                                Donations
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" value="Teaching" checked={selectedHashtag === "Teaching"} onChange={handleHashtagChange} />
                                Teaching
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" value="Welfare" checked={selectedHashtag === "Welfare"} onChange={handleHashtagChange} />
                                Welfare
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" value="Awareness" checked={selectedHashtag === "Awareness"} onChange={handleHashtagChange} />
                                Awareness
                            </label>
                        </div>
                    </div>
                    <div className="post-date">
                        <h3>Date</h3>
                        <input type="date" value={eventDate} onChange={handleDateChange} />
                    </div>
                    <div className="post-instalink">
                        <input type="text" placeholder=" Instagram link" />
                    </div>
                    <div className="post-twitterlink">
                        <input type="text" placeholder=" Twitter link" />
                    </div>
                    <div className="post-pic">
                        <input type="file" accept="image/*" />
                    </div>
                </div>
                <div className='Submit'>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Post;
