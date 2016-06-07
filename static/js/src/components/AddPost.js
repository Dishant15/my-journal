import React from 'react';
import Navbar from './Navbar';
import { hashHistory } from "react-router";

import $ from '../jquery.min.js';

export default class AddPost extends React.Component {
	render() {
		return(
			<div>
				<Navbar bgimg="about-bg.jpg" title="New Entry" subtitle="Every epic journey starts with a single step!!"/>

				<Form/>

				<hr/>
			</div>
		);
	}
}


class Form extends React.Component {

	constructor(props) {
    	super(props);
    	this.state = {};
    }

	titleChange = (e) => {
		this.setState({
			title: e.target.value
		});
	}

	tagsChange = (e) => {
		this.setState({
			tags: e.target.value
		});
	}

	todayChange = (e) => {
		this.setState({
			today: e.target.value
		});
	}

	tomorrowChange = (e) => {
		this.setState({
			tomorrow: e.target.value
		});
	}

	quoteChange = (e) => {
		this.setState({
			quote: e.target.value
		});
	}

	conclusionChange = (e) => {
		this.setState({
			conclusion: e.target.value
		});
	}

	submit = (e) => {
		// stop form from triggering redirect
	    e.preventDefault();

	    var data = {
	        title: this.state.title,
	        tags: this.state.tags,
	        today: this.state.today,
	        tomorrow: this.state.tomorrow,
	        quote: this.state.quote,
	        conclusion: this.state.conclusion
	    }
  
	    // Submit form via jQuery/AJAX
	    $.ajax({
	        type: 'POST',
	        url: 'http://localhost:3000/post/add',
	        data: data
	    })
	    .done(function(data) {
	        //all done redirect user to post list page
	        hashHistory.push('/');
	    });

	}


	render(){
		return(
			<div class="container">
		        <div class="row">
		            <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
		                <p>Your life is meant to be an epic story. How you think, perform and live today is part of that script.</p>
		                <form onSubmit={this.submit}>
		                    <div class="row control-group">
		                        <div class="form-group col-xs-12 floating-label-form-group controls">
		                            <label>Title</label>
		                            <input type="text" class="form-control" placeholder="Title" value={this.state.title} onChange={this.titleChange}/>
		                            <p class="help-block text-danger"></p>
		                        </div>
		                    </div>
		                    <div class="row control-group">
		                        <div class="form-group col-xs-12 floating-label-form-group controls">
		                            <label>Tags</label>
		                            <input type="text" class="form-control" placeholder="Tags" value={this.state.tags} onChange={this.tagsChange}/>
		                            <p class="help-block text-danger"></p>
		                        </div>
		                    </div>
		                    <div class="row control-group">
		                        <div class="form-group col-xs-12 floating-label-form-group controls">
		                            <label>Whats New!</label>
		                            <textarea rows="5" class="form-control" placeholder="Whats New!" value={this.state.today} onChange={this.todayChange}/>
		                            <p class="help-block text-danger"></p>
		                        </div>
		                    </div>
		                    <div class="row control-group">
		                        <div class="form-group col-xs-12 floating-label-form-group controls">
		                            <label>Thoughts for tomorrow</label>
		                            <textarea rows="5" class="form-control" placeholder="Thoughts for tomorrow" value={this.state.tomorrow} onChange={this.tomorrowChange}/>
		                            <p class="help-block text-danger"></p>
		                        </div>
		                    </div>
		                    <div class="row control-group">
		                        <div class="form-group col-xs-12 floating-label-form-group controls">
		                            <label>Quote of the day</label>
		                            <input type="text" class="form-control" placeholder="Quote of the day" value={this.state.quote} onChange={this.quoteChange}/>
		                            <p class="help-block text-danger"></p>
		                        </div>
		                    </div>
		                    <div class="row control-group">
		                        <div class="form-group col-xs-12 floating-label-form-group controls">
		                            <label>Conclusion</label>
		                            <textarea rows="5" class="form-control" placeholder="Conclusion" value={this.state.conclusion} onChange={this.conclusionChange}/>
		                            <p class="help-block text-danger"></p>
		                        </div>
		                    </div>
		                    <br/>
		                    <div id="success"></div>
		                    <div class="row">
		                        <div class="form-group col-xs-12">
		                            <button type="submit" class="btn btn-default">Send</button>
		                        </div>
		                    </div>
		                </form>
		            </div>
		        </div>
		    </div>
		)
	}
}
