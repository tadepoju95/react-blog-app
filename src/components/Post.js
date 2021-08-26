import React from 'react';
import { fetchPost } from '../actions';
import { connect } from 'react-redux';
import { Container, Card } from 'react-bootstrap'



class Post extends React.Component {

	componentDidMount() {
		this.props.fetchPost(this.props.match.params.id);
	}
  	
	renderList () {
		if (this.props.isSignedIn) {
		return (
			<section>
      			<article className="post">
       				<h2>{this.props.post.title}</h2>
        			<p className="post-content">{this.props.post.post}</p>
      			</article>
    		</section>
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


const mapStateToProps = (state, ownProps) => {
	return { 
		post: state.posts[ownProps.match.params.id],
		isSignedIn: state.auth.isSignedIn
	 };
}


export default connect(mapStateToProps, { fetchPost })(Post);

