import React from 'react';

const Profile = props => {
	return (
		<div className="profile">
			<div>
				<img src={props.profile.photourl} />
			</div>
			<div className="profile-details">
				<h3>Name</h3>
				<div>{props.profile.name}</div>
				<h3>Where am I from: {props.profile.origin}</h3>
				<h3>What was I up to before HR: {props.profile.previously}</h3>
				<h3>Tech Interests: {props.profile.interests}</h3>
				<h3>Coding Experience: {props.profile.experience}</h3>
				<h3>3 Interesting facts about myself:</h3>
				<h3>1. {props.profile.fact1}</h3>
				<h3>2. {props.profile.fact2}</h3>
				<h3>3. {props.profile.fact3}</h3>
			</div>
		</div>
	);
};

export default Profile;
