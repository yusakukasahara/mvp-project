import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Profiles from './components/Profiles.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			profiles: []
		};
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

	render() {
		return (
			<div>
				<h1>Cohort Introductions!</h1>

				<form>
					<label>Name </label>
					<input type="text" name="name" value="" />
					<label>Where are you from? </label>
					<input type="text" name="origin" value="" />
					<label>What were you up to before HR? </label>
					<input type="text" name="history" value="" />
					<label>What are your tech Interests? </label>
					<input type="text" name="interests" value="" />
					<label>Do you have any coding experience? </label>
					<input type="text" name="experience" value="" />
					<label>Share three interesting facts about yourself </label>
					<input type="text" name="fact1" value="" />
					<input type="text" name="fact2" value="" />
					<input type="text" name="fact3" value="" />
					<label>URL link of photo </label>
					<input type="text" name="fact3" value="" />
					<input type="submit" value="Submit" />
				</form>
				<Profiles profiles={this.state.profiles} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
