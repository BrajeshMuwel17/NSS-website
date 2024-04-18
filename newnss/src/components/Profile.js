import React from 'react';
import './Profile.css';

const TeamMember = (member) => {
  // console.log(member);
  const { name, designation, imagelink } = member;
  console.log(imagelink);
  return (
    <div className="Profile-box">
      <div className="profile-pic">
        <img className="pic"
          src={imagelink}
          alt="image"
          style={{
            borderRadius: '50%',
            width: '90%',
            height: '90%',
            objectFit: 'cover',
          }}
        />
      </div>
      <h3>{name}</h3>
      <p>{designation}</p>
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
  console.log(members);
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