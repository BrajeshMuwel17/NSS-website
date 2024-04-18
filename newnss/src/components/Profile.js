import React from 'react';
import './Profile.css';
import { MDBCard, MDBCardBody, MDBCardImage, MDBTypography } from 'mdb-react-ui-kit';

const TeamMember = (member) => {
  // console.log(member);
  const { name, designation, imagelink,hyperlink } = member;
  console.log(imagelink);
  console.log(member);
  return (
        <div className="vh-100 d-flex align-items-center justify-content-center ml-5 mr-5" style={{ backgroundColor: '#ffffff' }}>
      <MDBCard className="card">
        <MDBCardBody className="text-center">
          <div className="profile-image">
            <div className="mt-3 mb-4 card-image">
              <a href={hyperlink} target='_blank'>
                <MDBCardImage src={imagelink} alt="Profile Image" className="rounded-circle" />
              </a>
            </div>
          </div>
          <MDBTypography tag="h4" className="card-title">{name}</MDBTypography>
          <MDBTypography tag="h4" className="designation">{designation}</MDBTypography>
        </MDBCardBody>
      </MDBCard>
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
