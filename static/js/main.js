window.$ = window.jQuery = require('./src/jquery.min.js');
require('./src/bootstrap.min.js');
require('./src/clean-blog.min.js');

import ReactDom from 'react-dom';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from './src/components/Layout';
import PostDetail from './src/components/PostDetails';
import AddPost from './src/components/AddPost';
import { PostList } from './src/components/PostHighlight';

const app = document.getElementById('app');

ReactDom.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={PostList}/>
			<Route path="post" component={PostDetail}/>
			<Route path="addpost" component={AddPost}/>
		</Route>
	</Router>,
app);