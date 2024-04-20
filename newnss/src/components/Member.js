import axios from 'axios';
import './Member_style.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of navigate

const Member = () => {
    const [email,setEmail] = useState(localStorage.getItem('email'));
    const [password,setPassword] = useState(localStorage.getItem('password'));
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const [website, setWebsite] = useState('');
    const [image, setImage] = useState([]);
    
    const navigate = useNavigate(); // Use useNavigate hook to get the navigation function

    const handleSubmit = () => {
        console.log(name, designation, website, image[0])
        const formData = new FormData();
        formData.append('name', name);
        formData.append('designation', designation);
        formData.append('website', website);
        formData.append('avatar', image[0]);
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            withCredentials: true
        };
        for (var key of formData.entries()) {
            console.log(key[0] + ', ' + key[1]);
        }
        axios.post('https://nss-website.onrender.com/members', formData, config)
            .then(response => {
                console.log(response.data);
                navigate('/'); // Use navigate function to navigate to '/'
            })
            .catch(error => {
                console.error(error);
            });
    }

    const handleFileChange = (event) => {
        setImage(event.target.files);
    }


    console.log(email,password);
    console.log('hi');
    if (email === "aryan.arya@iitg.ac.in"&& password === 'nss') {
        return (
            <div className='Background'>
                <div className="member-container">
                    <div className="member-heading">
                        <h1>Add a Member</h1>
                    </div>
                    <div className="member-content">
                        <div className="member-name">
                            <input type="text" placeholder=" Name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className="member-designation">
                            <input type="text" placeholder="Designation" value={designation} onChange={(e) => setDesignation(e.target.value)} />
                        </div>
                        <div className="member-website">
                            <input type="text" placeholder="Website Link" value={website} onChange={(e) => setWebsite(e.target.value)} />
                        </div>
                        <div className="member-pic">
                            <h3>Profile Picture</h3>
                            <input type="file" accept="image/*" onChange={handleFileChange} />
                        </div>
                    </div>
                    <div className='Submit'>
                        <button onClick={handleSubmit} >Add</button>
                    </div>
                </div>
            </div>
        );
    } else {
        return null; // Render nothing if email is not 'a@gmail.com'
    }
}

export default Member;