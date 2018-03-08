import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
// import Cats from './components/Cats';

const Cats = () => <div>Cats</div>;

const App = () => (
	<div>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/catsnkittens" component={Cats} />
		</Switch>
	</div>
);

export default App;
