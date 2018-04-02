import React, {Component} from 'react'
import PropTypes from 'prop-types'

/* Stateless component*/
/*let Profile = props => (		
	<div>
		<h3> This is {props.name}</h3>
		<p> Age is {props.age} </p>
		<h4> Hobbies </h4>
		<ul>
			{props.hobby.map((h,i) => <li key={i}>{h}</li>)}
		</ul>
	</div>		
)*/

/* Statefull component */

class Profile extends Component {
	render() {	
		let hobbies = this.props.hobby.map( (h,i) => {
			 return (
				<li key={i}>{h}</li>
			)
		})

		return (
			<div>
				<h3> This is {this.props.name}</h3>
				<p> Age is {this.props.age} </p>
				<h4> Hobbies </h4>
				<ul>
					{hobbies}
				</ul>
			</div>
		)
	}
}

/* Validation for parameters*/
Profile.propTypes = {
	name : PropTypes.string.isRequired
}

export default Profile;