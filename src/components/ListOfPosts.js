import React from 'react';
import { fetchPosts } from '../actions';
import { connect } from 'react-redux';
import { Container, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Post from './Post';



class ListOfPosts extends React.Component {

	componentDidMount() {
		this.props.fetchPosts();
	}
  	
	renderList () {
		if (this.props.isSignedIn) {
		return this.props.posts.map((eachPost, index) => {
			return (
				<Link to={`/post/${eachPost.id}`} key={index}>
					<Card border="dark" style={{ width: '18rem' }} className="card-post">
	   					<Card.Body>
	      					<Card.Title>{eachPost.title}</Card.Title>
	      					<Card.Text>{eachPost.description}</Card.Text>
	   					</Card.Body>
	  				</Card>
	  			</Link>
			);
		});
	}
}

	render() {
		console.log(this.props.posts);
		return (
			<div>
				<div>{this.renderList()}</div>
			</div>
		)
	}
}


const mapStateToProps = state => {
	return { 
		posts: Object.values(state.posts),
		isSignedIn: state.auth.isSignedIn
	 };
}


export default connect(mapStateToProps, { fetchPosts })(ListOfPosts);

