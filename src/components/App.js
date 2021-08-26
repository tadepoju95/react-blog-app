import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Header from './Header';
import { Router, Route} from 'react-router-dom';
import ListOfPosts from './ListOfPosts';
import history from '../history';
import Post from './Post';


const App = () => {
	return (
		<div>
			<Router history={history}>
				<div>
					<Header />
					<Route path="/" exact component={Home} />
					<Route path="/posts" exact component={ListOfPosts} />
					<Route path="/post/:id" exact component={Post} />
				</div>
			</Router>
		</div>
	);
}


export default App;