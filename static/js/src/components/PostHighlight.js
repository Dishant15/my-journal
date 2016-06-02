import React from 'react';

export class PostList extends React.Component {
	render(){
		
		return(
			<div>
				<PostSummery/>
				<hr/>
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