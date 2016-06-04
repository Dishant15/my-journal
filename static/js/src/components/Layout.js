import React from 'react';
import { Link } from "react-router";

export default class Layout extends React.Component {

	componentDidMount() {
		
	}

	doSomething(){
		
	}

	render(){
		return(
			<div>
	         	{this.props.children}
	         	<ul class="pager">
	         		<li><a onClick={this.doSomething}>Do someting</a></li>
	         	</ul>
	        </div>
		);
	}
}