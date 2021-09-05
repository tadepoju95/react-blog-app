import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
import { GrGoogle } from 'react-icons/gr';
import Home from './Home';
import history from '../history';




class GoogleAuth extends React.Component {
	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client.init({
				clientId: process.env.REACT_APP_GOOGLE_AUTH_ID,
				scope: 'email'
			}).then(() => {
				this.auth = window.gapi.auth2.getAuthInstance();

				this.onAuthChange(this.auth.isSignedIn.get());
				this.auth.isSignedIn.listen(this.onAuthChange);
			})
		});
	}

	onAuthChange = isSignedIn => {
		if(isSignedIn) {
			this.props.signIn(this.auth.currentUser.get().getBasicProfile().getName()); 
		} else {
			this.props.signOut();
		}
	}


  	onSignInClick = () => {
    	this.auth.signIn();
 	};

  	onSignOutClick = () => {
    	this.auth.signOut();
    	history.push('/');
  	};

	renderAuthButton() {
	    if (this.props.isSignedIn === null) {
	      return null;
	    } else if (this.props.isSignedIn) {
	      return (
	        <button onClick={this.onSignOutClick} type="button" className="btn btn-outline-secondary">
	          <GrGoogle className="google-button" />
	          Sign Out
	        </button>
	      );
	    } else {
	      return (
	        <button onClick={this.onSignInClick} type="button" className="btn btn-outline-secondary googleButton">
	          <GrGoogle  />
	          Sign In with Google
	        </button>
	      );
	    }
	}

	render() {
		return (
			<div>
				<div>{this.renderAuthButton()}</div>
			</div>
		)
	}
}


const mapStateToProps = state => {
	return { isSignedIn: state.auth.isSignedIn };
}

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);

