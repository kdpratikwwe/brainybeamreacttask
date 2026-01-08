import React from 'react';
import './ProfileCard.css';

function ProfileCard(props) {
    return (
        <div className="profile-card">
            <img src={props.image} alt={props.name} className="profile-img" />
            <h3 className="profile-name">{props.name}</h3>
            <p className="profile-description">{props.description}</p>
        </div>
    );
}

export default ProfileCard;
