import React from 'react';

const Profile = ({ user }) => {
  if (!user) {
    return <p>Please login to view profile.</p>;
  }

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <p><strong>First Name:</strong> {user.firstName}</p>
      <p><strong>Last Name:</strong> {user.lastName}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Dob:</strong> {user.dob}</p>
      <p><strong>Gender:</strong> {user.gender}</p>
      <p><strong>City:</strong> {user.city}</p>
    </div>
  );
};

export default Profile;
