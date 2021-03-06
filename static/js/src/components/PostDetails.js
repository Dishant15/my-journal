import React from 'react';

import Navbar from './Navbar';

class Post extends React.Component {
	render(){
		var today;
		if(this.props.post.today){
			today = (<div>
						<h2 class="section-heading">What's Up!!</h2>
		                    
	                    <p>
	                    	{this.props.post.today.split('\n').map(function(item) {
							  return ( <span>{item}<br/></span> )
							})}
	                    </p>
	                </div>);
		}

		var tomorrow;
		if(this.props.post.tomorrow){
			tomorrow = (<div>
						<h2 class="section-heading">Final Thoughts for tomorrow</h2>
		                    
	                    <p>
	                    	{this.props.post.tomorrow.split('\n').map(function(item) {
							  return ( <span>{item}<br/></span> )
							})}
	                    </p>
	                </div>);
		}

		var quote;
		if(this.props.post.quote){
			quote = <blockquote>{this.props.post.quote}</blockquote>
		}

		var conclusion;
		if(this.props.post.conclusion){
			conclusion = (<div>
							<h2 class="section-heading">Conclusion</h2>

		                    <p>
		                    	{this.props.post.conclusion.split('\n').map(function(item) {
								  return ( <span>{item}<br/></span> )
								})}
		                    </p>
		                    </div>);
		}

		return(
			<article>
		        <div class="container">
		            <div class="row">
		                <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
		                	
		                	{today}

		                    {tomorrow}

		                    {quote}

	                    	{conclusion}
		                </div>
		            </div>
		        </div>
		    </article>
		);
	}
}

export default class PostDetail extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		post:false
    	};
    }

	componentDidMount() {

		var postid = this.props.params.postid;

		var setData = (data) => {
			// change state data with this new data
			this.setState({post:data});
		};

		$.ajax({
			method: "GET",
			url: 'http://localhost:3000/post/details/' + postid,
		}).done(setData);
	}

	render(){
		var post;
		var bgimg = "post-bg.jpg";
		if(this.state.post){
			post = <Post post={this.state.post}/>
			if("bgimg" in this.state.post) bgimg = this.state.post.bgimg;
		}

		return(
			<div>
				<Navbar bgimg={bgimg} title={this.state.post.date} subtitle={this.state.post.title} />

				{post}

			</div>
		);
	}
}