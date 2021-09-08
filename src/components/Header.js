import React from 'react';
import './main.css';
import { Container, Nav } from 'react-bootstrap'
import GoogleAuth from './GoogleAuth';
import { ImBlogger } from 'react-icons/im';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';





class Header extends React.Component {

	handleLogo() {
		if(this.props.isSignedIn) {
			return <div className="d-flex justify-content-start blog-logo"><ImBlogger className="blog-react-icon" />The Blog</div>
		}
	}

	handleNav() {
		if(this.props.isSignedIn) {
			return (
				<Container fluid>
					<Nav variant="tabs" defaultActiveKey="/">
  						<Nav.Item>
    						<NavLink to="/" className="color">Home</NavLink>
  						</Nav.Item>
  						<Nav.Item>
   							 <NavLink to="/posts" className="color nav-bar">Posts</NavLink>
  						</Nav.Item>
					</Nav>
				</Container>
			)
		}
	}

	render() {
		return (
			<Container fluid>
				<div>{this.handleLogo()}</div>
				<div className="text-right">
					<GoogleAuth />
				</div>
				<div>{this.handleNav()}</div>
			</Container>
		);
	}
}

const mapStateToProps = state => {
	return { 
		isSignedIn: state.auth.isSignedIn
	 };
}


export default connect(mapStateToProps, {})(Header);
