import './Post_style.css';
import { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const Post = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [hashtag, setHashtag] = useState('');
    const [date, setDate] = useState('');
    const [instalink, setInstalink] = useState('');
    const [twitterlink, setTwitterlink] = useState('');
    const [imagelink, setImagelink] = useState([]);
    const [email,setEmail] = useState(localStorage.getItem('email'));
    const [password,setPassword] = useState(localStorage.getItem('password'));

    const navigate = useNavigate();

    const handleSubmit = () => {
        console.log('hi');
        console.log(title, content, hashtag, date, instalink, twitterlink, imagelink[0])
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('hashtag', hashtag);
        formData.append('date', date);
        formData.append('instalink', instalink);
        formData.append('twitterlink', twitterlink);
        formData.append('avatar', imagelink[0]);
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            withCredentials: true
        };
        for (var key of formData.entries()) {
            console.log(key[0] + ', ' + key[1]);
        }
        axios.post('http://localhost:3000/posts', formData, config)
            .then(response => {
                console.log(response.data);
                navigate('/');
            })
            .catch(error => {
                console.error(error);
            });
        
    }

    const handleFileChange = (event) => {
        setImagelink(event.target.files);
    }

    const handleHashtagChange = (event) => {
        setHashtag(event.target.value);
    }
if (email === 'aryan.arya@iitg.ac.in' && password === 'nss') {
    return (
        <div className='Background'>
            <div className="member-container">
                <div className="member-heading">
                    <h1>Create a Post</h1>
                </div>
                <div className="member-content">
                    <div className="post-title">
                        <input type="text" placeholder="Title" value={title} onChange={(e) =>setTitle(e.target.value)} />
                    </div>
                    <div className="post-description">
                        <input type="text" placeholder="Description" value={content} onChange={(e) =>setContent(e.target.value)} />
                    </div>
                    <div className="post-hashtag" >
                        <select value={hashtag} onChange={handleHashtagChange} >
                            <option value="Cleanliness">Cleanliness</option>
                            <option value="Donations">Donations</option>
                            <option value="Teaching">Teaching</option>
                            <option value="Welfare">Welfare</option>
                            <option value="Awareness">Awareness</option>
                        </select>
                    </div>
                    <div className="post-date">
                        <input type="date" value={date} onChange={(e) =>setDate(e.target.value)}/>
                    </div>
                    <div className="post-insta">
                        <input type="text" placeholder="Instagram Link" value={instalink} onChange={(e) =>setInstalink(e.target.value)} />
                    </div>
                    <div className="post-twitter">
                        <input type="text" placeholder="Twitter Link"  value={twitterlink} onChange={(e) =>setTwitterlink(e.target.value)} />
                    </div>
                    <div className="post-image">
                        <h3>Upload Image</h3>
                        <input type="file" accept="image/*" onChange={handleFileChange} />
                    </div>
                </div>
                <div className='Submit'>
                <button onClick={handleSubmit}>Post</button>
                </div>
            </div>
        </div>
    );
}
}
export default Post;
