import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './screens/Home';

export default function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
			</Switch>
		</Router>
	)
}