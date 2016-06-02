window.$ = window.jQuery = require('./src/jquery.min.js');
require('./src/bootstrap.min.js');
require('./src/clean-blog.min.js');

import ReactDom from 'react-dom';
import React from 'react';

import Layout from './src/components/Layout';

const app = document.getElementById('app');

ReactDom.render(
	<Layout/>,
app);