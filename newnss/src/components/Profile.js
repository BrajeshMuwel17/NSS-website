import React from 'react';
import debangaImage from '../images/banner.jpg';
import janeImage from '../images/banner.jpg';
import './Profile.css';

const TeamMember = ({ image, name, position }) => {
  return (
    <div className="Profile-box">
      <div className="profile-pic">
        <img className="pic"
          src={image}
          alt={name}
          style={{
            borderRadius: '50%',
            width: '90%',
            height: '90%',
            objectFit: 'cover',
          }}
        />
      </div>
      <h3>{name}</h3>
      <p>{position}</p>
    </div>
  );
};

const TeamMembers = ({ members }) => {
  return (
    <div className="TeamMembers">
      {members.map((member) => (
        <TeamMember key={member.id} {...member} />
      ))}
    </div>
  );
};

const Profile = ({ members }) => {
  //   return <TeamMembers members={members}/>;
  return <div className="profile-section">
    <div className="team-text">
      <h1 className="our-team">Our Team</h1>
    </div>
    <TeamMembers members={members} />
  </div>;
};

export default Profile;


{/* <div className="profile-section">
        <div className="team-text">
          <h1 className="our-team">Our Team</h1>
        </div>
        <Profile/>
      </div> */}