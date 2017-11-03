// import React from 'react';
// import Profile from './Profile.jsx';

const Cohort = props => (
	<div>
		<h4> Cohort Introductions </h4>
		There are {props.items.length} students.
		{props.items.map(item => <Profile item={item} />)}
	</div>
);

export default Profiles;
