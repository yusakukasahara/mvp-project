import React from 'react';

const Profile = props => {
	return (
		<div className="student-profile">
			<div>
				<img src={props.student.photourl} />
			</div>
			<div className="student-profile-details">
				<h3>Name</h3>
				<div>{props.student.name}</div>
				<h3>Where am I from: {props.student.origin}</h3>
				<h3>What was I up to before HR: {props.student.history}</h3>
				<h3>Tech Interests: {props.student.interests}</h3>
				<h3>Coding Experience: {props.student.experience}</h3>
				<h3>3 Interesting facts about myself:</h3>
				<h3>1. {props.student.fact1}</h3>
				<h3>2. {props.student.fact2}</h3>
				<h3>3. {props.student.fact3}</h3>
			</div>
		</div>
	);
};

export default Profile;
