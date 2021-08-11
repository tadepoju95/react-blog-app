import React from 'react';
import { connect } from 'react-redux';


class Posts extends React.Component {

	renderSomething() {
		if(this.props.isSignedIn) {
			return <div>Hi, again</div>
		}
	}

	render() {
		return <div>{this.renderSomething()}</div>
	}
}

const mapStateToProps = state => {
	return { 
		isSignedIn: state.auth.isSignedIn
	 };
}


export default connect(mapStateToProps, {})(Posts);
