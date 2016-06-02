import React from 'react';
import { Link } from "react-router";

import { PostList } from './PostHighlight';
import Paginator from './Paginator';


export default class Layout extends React.Component {

	render(){
		return(
			<div class="container">
		        <div class="row">
		            <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
		                
		                <PostList/>
		                <Paginator/>

		                <hr/>
		            </div>
		        </div>
		    </div>

		);
	}
}