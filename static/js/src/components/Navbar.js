import React from 'react';
import { Link } from "react-router";

class Nav extends React.Component {
    render(){
        return(
            <nav class="navbar navbar-default navbar-custom navbar-fixed-top">
                <div class="container-fluid">

                    <div class="navbar-header page-scroll">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="index.html">MyJournal</a>
                    </div>

                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav navbar-right">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="post">See Post</Link>
                            </li>
                            <li>
                                <Link to="addpost">New Entry</Link>
                            </li>
                            <li>
                                <a>Search</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

class Header extends React.Component {
    render(){
        var inimg = this.props.bgimg;
        var Bgimage = {
                backgroundImage: 'url(static/img/' + inimg + ')'
            };

        return(
            <header class="intro-header" style={Bgimage}>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                            <div class="site-heading">
                                <h1>{this.props.title}</h1>
                                <hr class="small"/>
                                <span class="subheading">{this.props.subtitle}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default class Navbar extends React.Component {
    render(){
        return(
            <div>
                <Nav/>
                <Header title={this.props.title} subtitle={this.props.subtitle} bgimg={this.props.bgimg}/>
            </div>
        );
    }
}
            