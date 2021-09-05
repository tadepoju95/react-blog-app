import React from 'react';
import { createComment } from '../actions';
import { connect } from 'react-redux';
import { Container, Button, InputGroup, FormControl } from 'react-bootstrap'
import ListOfComments from './ListOfComments';



class CommentSection extends React.Component {
	state = { time : new Date().toLocaleString(), comment: "", url: window.location.href}

	
	handleFormSubmit = (time, comment, url) => {
		if(this.state.comment !== "") {
			this.props.createComment(this.state.time, this.state.comment, this.state.url);
			this.setState({ comment: ""});
		}
	};
  	
	renderList () {
		if (this.props.isSignedIn) {
		return (
			<Container className="comment-section">
				<h5>Comments:</h5>
				<InputGroup className="mb-3 comment">
	    			<FormControl placeholder="comment" type="text" value={this.state.comment} onChange={(e) => this.setState({ comment: e.target.value})} />
	    			<Button variant="outline-secondary" id="button-addon2" onClick={() => this.handleFormSubmit()}>Add Comment</Button>
	    		</InputGroup>
	    		<hr />
	    		<ListOfComments />
    		</Container>
		)
	}
}

	render() {
		console.log(this.props);
		return (
			<div>
				<div>{this.renderList()}</div>
			</div>
		)
	}
}


const mapStateToProps = (state) => {
	return { 
		isSignedIn: state.auth.isSignedIn,
	 };
}


export default connect(mapStateToProps, { createComment })(CommentSection);