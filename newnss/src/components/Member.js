import axios from 'axios';
import './Member_style.css';
import { useState } from 'react';

const Member = () => {

    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const [website, setWebsite] = useState('');
    const [image, setImage] = useState([]);

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
        axios.post('http://localhost:3000/members', formData, config)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    const handleFileChange = (event) => {
        setImage(event.target.files);
    }

    return (
        <div className='Background'>
            <div className="member-container">
                <div className="member-heading">
                    <h1>Add a Member</h1>
                </div>
                <div className="member-content">
                    <div className="member-name">
                        <input type="text" placeholder=" Name" value={name} onChange={(e) =>setName(e.target.value)} />
                    </div>
                    
                    <div className="member-designation">
                        <input type="text" placeholder="Designation"  value={designation} onChange={(e) =>setDesignation(e.target.value)}  />
                    </div>
                    <div className="member-website">
                        <input type="text" placeholder="Website Link"  value={website} onChange={(e) =>setWebsite(e.target.value)}  />
                    </div>
                    <div className="member-pic">
                        <h3>Profile Picture</h3>
                        <input type="file" accept="image/*" onChange={handleFileChange} />
                    </div>
                </div>
                <div className='Submit'>
                    <button onClick={handleSubmit}>Add</button>
                </div>
            </div>
        </div>
    );
}

export default Member;
