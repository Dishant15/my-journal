import React from 'react';

import Navbar from './Navbar';

class Post extends React.Component {
	render(){
		return(
			<article>
		        <div class="container">
		            <div class="row">
		                <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
		                	<h2 class="section-heading">What's Up!!</h2>
		                    <p>{this.props.post.today}</p>

		                    <h2 class="section-heading">Final Thoughts for tomorrow</h2>

		                    <p>{this.props.post.tomorrow}</p>

		                    <blockquote>{this.props.post.quote}</blockquote>

		                    <h2 class="section-heading">Conclusion</h2>

		                    <p>{this.props.post.conclusion}</p>
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

		var setData = (function(data) {
			// change state data with this new data
			this.setState({post:data});
		}).bind(this);

		setData({
			title: "This is just a test title.",
			today: "Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe, a round earth in which all the directions eventually meet, in which there is no center because every point, or none, is center — an equal earth which all men occupy as equals. The airman's earth, if free men make it, will be truly round: a globe in practice, not in theory.",
			tomorrow: "There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.",
			quote:"The dreams of yesterday are the hopes of today and the reality of tomorrow. Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next ten.",
			conclusion:"As we got further and further away, it [the Earth] diminished in size. Finally it shrank to the size of a marble, the most beautiful you can imagine. That beautiful, warm, living object looked so fragile, so delicate, that if you touched it with a finger it would crumble and fall apart. Seeing this has to change a man."
		})
		// $.ajax({
		// 	method: "GET",
		// 	url: 'http://localhost:3000/post/list',
		// }).done(setData);
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
				<Navbar bgimg={bgimg} title={this.state.post.title} />

				{post}

			</div>
		);
	}
}