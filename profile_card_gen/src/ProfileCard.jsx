import React from "react";

const ProfileCard = ({name,bio,profilePicture}) =>{
    return (
    <div
      className="profile-card"
    >
      <img
        src={profilePicture}
        alt={`${name}'s profile`}
        className="profile-picture"
      />
      <div className="profile-info">
        <h2 className="profile-name">{name}</h2>
        <p className="profile-bio">{bio}</p>
      </div>
    </div>
  );
}

export default ProfileCard ;