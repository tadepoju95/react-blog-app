import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Header from './Header';
import { BrowserRouter, Route} from 'react-router-dom';
import ListOfPosts from './ListOfPosts';



const App = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Header />
					<Route path="/" exact component={Home} />
					<Route path="/posts" exact component={ListOfPosts} />
				</div>
			</BrowserRouter>
		</div>
	);
}


export default App;