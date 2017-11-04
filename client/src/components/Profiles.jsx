import React from 'react';
import Profile from './Profile.jsx';

const Profiles = props => (
	<div>
		<h4>Profiles</h4>
		{props.profiles.map(profile => <Profile profile={profile} />)}
	</div>
);

export default Profiles;
// There are {Object.keys(props.profiles).length} students.
