import React from 'react';
import Paginator from './Paginator';
import Navbar from './Navbar';

import $ from '../jquery.min.js';

export class PostList extends React.Component {

	constructor(props) {
    	super(props);
    	this.state = {
    		data:false
    	};
    }

	componentDidMount() {

		var setData = (function(data) {
			// change state data with this new data
			this.setState({data});
		}).bind(this);

		$.ajax({
			method: "GET",
			url: 'http://localhost:3000/post/list',
		}).done(setData);
	}

	render(){

		var postlist;
		if(this.state.data) {
			postlist = this.state.data.map(function(datum) {
			        	return (<div key={datum._id}>
			        				<PostSummery data={datum}/>
			        				<hr/>
			        			</div>);
			        });
		}

		return(
			<div>
				<Navbar bgimg="home-bg.jpg" title="My Journel" subtitle="Life is a magnificent journey, live it as such!!"/>
				<div class="container">
			        <div class="row">
			            <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">

							{postlist}

							<Paginator/>
							<hr/>
	  			        </div>
			        </div>
			    </div>
			</div>
		);
	}
}

export class PostSummery extends React.Component {
	render(){
		return(
			<div class="post-preview">
                <a href="post.html">
                    <h2 class="post-title">
                        {this.props.data.title}
                    </h2>
                    <h3 class="post-subtitle">
                        {this.props.data.tags}
                    </h3>
                </a>
                <p class="post-meta">Posted on <a href="#">{this.props.data.date}</a> {this.props.data.time}</p>
            </div>
		);
	}
}