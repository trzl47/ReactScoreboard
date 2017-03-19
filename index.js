// Libs
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//Reducers
import PlayerReducer from './reducers/player';

// Components
import Scoreboard from './containers/Scoreboard';

// CSS
import './app.css';

const store = createStore(
	PlayerReducer,
	window.devToolsExtension && window.devToolsExtension()
);

render(
	<Provider store={store}>
		<Scoreboard />
	</Provider>
		, document.getElementById('container'));
