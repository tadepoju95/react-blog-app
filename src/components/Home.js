import React from 'react';
import { ImBlogger } from 'react-icons/im';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap'
import { createPost } from '../actions';



class Home extends React.Component {
	state = { title:"", author: "", description: "", post: ""}

	renderlogo() {
		if(!this.props.isSignedIn) {
			return <div className="d-flex justify-content-center logo"><ImBlogger className="blog-icon" />The Blog</div>
		}
	}

	handleFormSubmit = (title, author, description, post) => {
		if(this.state.title !== "" && this.state.author !== "" && this.state.description !== "" && this.state.post !== "") {
			this.props.createPost(this.state.title, this.state.author, this.state.description, this.state.post);
			this.setState({ title:"", author:"", description:"", post: ""});
		}
	};

	renderForm() {
		if(this.props.isSignedIn) {
			return (
				<Form>
  					<Form.Group className="w-75 p-3 post-form" controlId="exampleForm.ControlInput1">
    					<Form.Label>Title:</Form.Label>
    					<Form.Control type="text" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value})} />
    					<Form.Label>Name:</Form.Label>
    					<Form.Control type="text" value={this.state.author} onChange={(e) => this.setState({ author: e.target.value})} />
    					<Form.Label>Description:</Form.Label>
    					<Form.Control type="text" value={this.state.description} onChange={(e) => this.setState({ description: e.target.value})} />
    					<Form.Label>Body:</Form.Label>
    					<Form.Control as="textarea" placeholder="What's on your mind..." rows={11} value={this.state.post} onChange={(e) => this.setState({ post: e.target.value})}  />
  					</Form.Group>
  					<Button variant="outline-secondary" className="submit-button" onClick={() => this.handleFormSubmit()}>Post</Button>
				</Form>
			)
		}
	}

	render() {
		return (
			<div>
				<div>{this.renderlogo()}</div>
				<div>{this.renderForm()}</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return { 
		isSignedIn: state.auth.isSignedIn
	 };
}


export default connect(mapStateToProps, {createPost})(Home);
