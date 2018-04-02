import React, {Component} from 'react'
import ReactDOM from 'react-dom';

export default class AddProfile extends Component {
	constructor(props) {
		super(props);

		this.state = {			
			name : '',
			age : '',
			hobby : ''			
		}

		this.addUserProfile = this.addUserProfile.bind(this);
		this.onName = this.onName.bind(this);
		this.onAge = this.onAge.bind(this);
		this.onHobby = this.onHobby.bind(this);
		this.resetState = this.resetState.bind(this);
		
	}

	resetState() {
		this.setState({			
			name : '',
			age : '',
			hobby : ''			
		}, () => {
			ReactDOM.findDOMNode(this.refs.nameInput).focus()
		});
	}

	addUserProfile() {
		let profileObj = {
			name : this.state.name,
			age : this.state.age,
			hobbies : [this.state.hobby]
		};

		this.props.addProfile(profileObj);

		this.resetState();
	}

	onName(e) {
		this.setState({
			name : e.target.value
		});
	}

	onAge(e) {
		this.setState({
			age : e.target.value
		});
	}

	onHobby(e) {
		this.setState({
			hobby : e.target.value
		});
	}

	render() {
		return (
			<center>			

				{/* Title we are getting content from custom component children*/}
				<h2> {this.props.children} </h2>
				<div>
					<label> Name </label>
					<input ref='nameInput' type="text" onChange={this.onName} value={this.state.name} />
				</div>
				
				<div>
					<label> Age </label>
					<input type="number" onChange={this.onAge} value={this.state.age} />
				</div>
				
				<div>
					<label> Hobbies </label>
					<input type="text" onChange={this.onHobby} value={this.state.hobby} />
				</div>				

				<div> 
					<button onClick={this.addUserProfile} style={{marginLeft:'20px'}}> Add </button>
				</div>
				
			</center>
		)
	}
}