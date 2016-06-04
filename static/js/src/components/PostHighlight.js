import React from 'react';
import Paginator from './Paginator';
import Navbar from './Navbar';

export class PostList extends React.Component {
	render(){
		
		return(
			<div>
				<Navbar/>
				<div class="container">
			        <div class="row">
			            <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
							<PostSummery/>
							<hr/>
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
                        Man must explore, and this is exploration at its greatest
                    </h2>
                    <h3 class="post-subtitle">
                        Problems look mighty small from 150 miles up
                    </h3>
                </a>
                <p class="post-meta">Posted by <a href="#">Start Bootstrap</a> on September 24, 2014</p>
            </div>
		);
	}
}