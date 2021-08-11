import React from 'react';
import './main.css';
import { Container, Nav } from 'react-bootstrap'
import GoogleAuth from './GoogleAuth';
import { ImBlogger } from 'react-icons/im';
import { connect } from 'react-redux';




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
    						<Nav.Link href="/" className="color">Home</Nav.Link>
  						</Nav.Item>
  						<Nav.Item>
   							 <Nav.Link href="/posts" className="color">Posts</Nav.Link>
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
