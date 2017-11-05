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
				<h3>Where am I from:</h3>
				<div>{props.profile.origin}</div>
				<h3>What was I up to before HR:</h3>
				<div>{props.profile.previously}</div>
				<h3>Tech Interests:</h3>
				<div>{props.profile.interests}</div>
				<h3>Coding Experience:</h3>
				<div>{props.profile.experience}</div>
				<h3>Interesting facts about myself:</h3>
				<div>{props.profile.fact1}</div>
				<div>{props.profile.fact2}</div>
				<div>{props.profile.fact3}</div>
			</div>
			<br />
		</div>
	);
};

export default Profile;
