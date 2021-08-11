import React from 'react';
import { fetchPosts } from '../actions';
import { connect } from 'react-redux';
import { Container, Card } from 'react-bootstrap'



class ListOfPosts extends React.Component {

	componentDidMount() {
		this.props.fetchPosts();
	}
  	
	renderList () {
		if (this.props.isSignedIn) {
		return this.props.posts.map((eachPost, index) => {
			return (
				<Card border="secondary" style={{ width: '18rem' }}>
    				<Card.Header>Header</Card.Header>
   					<Card.Body>
      					<Card.Title>Secondary Card Title</Card.Title>
      					<Card.Text>Some quick example text to build on the card title and make up the bulk
        				of the card's content.</Card.Text>
   					</Card.Body>
  				</Card>
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

