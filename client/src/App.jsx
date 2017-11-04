import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Profiles from './components/Profiles.jsx';
import axios from 'axios';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			//default
			profiles: [],
			name: '',
			origin: '',
			previously: '',
			interests: '',
			experience: '',
			fact1: '',
			fact2: '',
			fact3: '',
			photourl: ''
		};
		this.submitProfile = this.submitProfile.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		$.ajax({
			url: '/profiles',
			success: data => {
				this.setState({
					profiles: data
				});
			},
			error: err => {
				console.log('err', err);
			}
		});
	}

	handleInputChange(event) {
		this.setState({ [event.target.name]: event.target.value });
		console.log(this.state);
		// this.props.handleSubmit(event.target.value);
		// this.setState({ value: event.target.value });
	}

	handleChange(event) {
		// alert('Submitted: ' + this.state.value);
		// this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		// alert('Submitted: ' + this.state.value);
		// event.preventDefault();
	}
	//
	// handleInputChange(e) {
	// 	e.preventDefault();
	// 	let value = e.target.value;
	// 	let name = e.target.name;
	// 	this.setState({
	// 		[name]: value
	// 	});
	// }

	submitProfile(e) {
		e.preventDefault();
		var newProfile = {
			name: this.state.name,
			origin: this.state.origin,
			previously: this.state.previously,
			interests: this.state.interests,
			experience: this.state.experience,
			fact1: this.state.fact1,
			fact2: this.state.fact2,
			fact3: this.state.fact3,
			photourl: this.state.photourl
		};
		axios.post('/profiles', newProfile).then(res => {
			alert('Created');
		});
	}

	render() {
		return (
			<div>
				<img src="hack-reactor-logo.png" />
				<h1>Cohort Introductions!</h1>
				<form>
					<label>Name </label>
					<br />
					<input
						name="name"
						type="text"
						value={this.state.name}
						onChange={this.handleInputChange}
					/>
					<br />

					<label>Where are you from? </label>
					<br />
					<input
						name="origin"
						type="text"
						value={this.state.origin}
						onChange={this.handleInputChange}
					/>
					<br />

					<label>What were you up to before HR? </label>
					<br />
					<input
						name="previously"
						type="text"
						value={this.state.previously}
						onChange={this.handleInputChange}
					/>
					<br />

					<label>What are your tech Interests? </label>
					<br />
					<input
						name="interests"
						type="text"
						value={this.state.interests}
						onChange={this.handleInputChange}
					/>
					<br />

					<label>Do you have any coding experience? </label>
					<br />
					<input
						name="experience"
						type="text"
						value={this.state.experience}
						onChange={this.handleInputChange}
					/>
					<br />

					<label>Share three interesting facts about yourself </label>
					<br />
					<input
						name="fact1"
						type="text"
						value={this.state.fact1}
						onChange={this.handleInputChange}
					/>
					<br />
					<input
						name="fact2"
						type="text"
						value={this.state.fact2}
						onChange={this.handleInputChange}
					/>
					<br />
					<input
						name="fact3"
						type="text"
						value={this.state.fact3}
						onChange={this.handleInputChange}
					/>
					<br />
					<label>Upload Photo</label>
					<br />
					<input
						name="photourl"
						type="text"
						value={this.state.photourl}
						onChange={this.handleInputChange}
					/>
				</form>
				<input type="submit" value="Submit" onClick={this.submitProfile} />
				<Profiles profiles={this.state.profiles} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
