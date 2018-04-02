import React, {Component} from 'react'
import Profile from './Profile';
import AddProfile from './AddProfile';

export default class ProfileList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			profiles : [
				{
					//name : 'Jame',
					age : 30,
					hobbies : ['Cricket', 'Basket Ball']
				},
				{
					name : 'Peter',
					age : 35,
					hobbies : ['Chess', 'Long Tenis']
				}
			]
		}

		this.addProfile = this.addProfile.bind(this);
	}

	addProfile(newProfile) {
		this.setState({
			profiles : this.state.profiles.concat(newProfile)
		});
	}

	render() {
		let profileList = this.state.profiles.map( (profile, i) => {
			return (<Profile 
						key={i}
						name={profile.name}
						age={profile.age} 
						hobby={profile.hobbies}/>);
		});

		return (
			<div>
				<AddProfile addProfile={this.addProfile}> Add Profile </AddProfile>
				<hr/>
					<h2> Profile List </h2>
				<hr/>
				{profileList}				
			</div>
		)
	}
}