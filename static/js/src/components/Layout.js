import React from 'react';
import { Link } from "react-router";

export default class Layout extends React.Component {

	componentDidMount() {

	}

	render(){
		return(
			<div>
	         	{this.props.children}
	        </div>
		);
	}
}