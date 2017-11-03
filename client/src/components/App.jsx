// import React from 'react';
// import ReactDOM from 'react-dom';
// import $ from 'jquery';
// import Cohort from './Profiles.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: []
		};
	}

	componentDidMount() {
		$.ajax({
			url: '/items',
			success: data => {
				this.setState({
					items: data
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
						Name<br>
						<input type="text" name="name" value="Mickey">
						<br>
						Where are you from?<br>
						<input type="text" name="origin" value="Mouse">
						<br>
						What were you up to before HR?<br>
						<input type="text" name="history" value="Mouse">
						<br>
						What are your tech Interests?<br>
						<input type="text" name="interests" value="Mouse">
						<br>
						Do you have any coding experience?<br>
						<input type="text" name="experience" value="Mouse">
						<br>
						Share three interesting facts about yourself<br>
						<input type="text" name="fact1" value="Mouse">
						<input type="text" name="fact2" value="Mouse">
						<input type="text" name="fact3" value="Mouse">
						<br><br>
						<input type="submit" value="Submit">
					</form>
				<Cohort items={this.state.items} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
