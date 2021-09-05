import React from 'react';
import { fetchComments } from '../../actions';
import { connect } from 'react-redux';
import { Container, Card } from 'react-bootstrap'
import { FaRegUserCircle } from 'react-icons/fa';




class ListOfComments extends React.Component {

	componentDidMount() {
		this.props.fetchComments();
	}
  	
	renderList () {
		if (this.props.isSignedIn) {
		return this.props.comments.filter((eachComment) => {
			return window.location.href === eachComment.url
		}).map((eachComment, index) => {
			return (
				<div key={index}>
					<FaRegUserCircle className="user-icon" /><span className="user-name">{eachComment.userName}</span>
					<p className="user-comment">{eachComment.comment}</p>
					<p className="user-time">{eachComment.time}</p>
				</div>
			);
		});
	}
}


	render() {
		console.log(this.props.comments);
		return (
			<div>
				<div>{this.renderList()}</div>
			</div>
		)
	}
}


const mapStateToProps = state => {
	return { 
		comments: Object.values(state.comments),
		isSignedIn: state.auth.isSignedIn
	 };
}


export default connect(mapStateToProps, { fetchComments })(ListOfComments);
