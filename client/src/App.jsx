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

	handleInputChange(e) {
		this.props.handleSearchInputChange(e.target.value);
		this.setState({
			value: e.target.value
		});
	}

	render() {
		return (
			<div>
				<h1>Cohort Introductions!</h1>
				<label>Name </label>
				<br />
				<input
					className="form-control"
					type="text"
					value={this.state.value}
					onChange={this.handleInputChange.bind(this)}
				/>
				<br />

				<label>Where are you from? </label>
				<br />
				<input
					className="form-control"
					type="text"
					value={this.state.value}
					onChange={this.handleInputChange.bind(this)}
				/>
				<br />

				<label>What were you up to before HR? </label>
				<br />
				<input
					className="form-control"
					type="text"
					value={this.state.value}
					onChange={this.handleInputChange.bind(this)}
				/>
				<br />

				<label>What are your tech Interests? </label>
				<br />
				<input
					className="form-control"
					type="text"
					value={this.state.value}
					onChange={this.handleInputChange.bind(this)}
				/>
				<br />

				<label>Do you have any coding experience? </label>
				<br />
				<input
					className="form-control"
					type="text"
					value={this.state.value}
					onChange={this.handleInputChange.bind(this)}
				/>
				<br />

				<label>Share three interesting facts about yourself </label>
				<br />
				<input
					className="form-control"
					type="text"
					value={this.state.value}
					onChange={this.handleInputChange.bind(this)}
				/>
				<br />
				<input
					className="form-control"
					type="text"
					value={this.state.value}
					onChange={this.handleInputChange.bind(this)}
				/>
				<br />
				<input
					className="form-control"
					type="text"
					value={this.state.value}
					onChange={this.handleInputChange.bind(this)}
				/>
				<br />
				<Profiles profiles={this.state.profiles} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
