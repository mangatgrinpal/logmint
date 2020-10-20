import React, { useState } from 'react';
import './App.scss';



import Header from './components/Header';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Container from 'react-bootstrap/Container';


import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab)



const App = () => {

	const [ showSignUp, setShowSignUp ] = useState(true);
	const [ showSignIn, setShowSignIn ] = useState(false);




  return (
		<Router>
			<Container fluid={true}>
				<Switch>
					<Route exact path='/' >
						<Header
							showSignUp={showSignUp}
							setShowSignUp={setShowSignUp}
							showSignIn={showSignIn}
							setShowSignIn={setShowSignIn} />
						<Home
							showSignUp={showSignUp}
							setShowSignUp={setShowSignUp}
							showSignIn={showSignIn}
							setShowSignIn={setShowSignIn} />
					</Route>
					<Route path='/dashboard'>
						<Dashboard />
					</Route>
				</Switch>
				
			</Container>
		</Router>
  );
}

export default App;
