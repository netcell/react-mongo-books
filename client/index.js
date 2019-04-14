import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { createReduxStore } from './redux/createReduxStore';
import { Routes } from './Routes';
import { ReduxProvider } from './redux/hooks';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	body {
		background: #F4F4F4;
		padding: 0;
		margin: 0;
	}
`

const App = () => {
	const store = createReduxStore();
	return <ReduxProvider store={store}>
		<Router>
			<GlobalStyle />
			<Routes />
		</Router>
	</ReduxProvider>;
}

ReactDOM.render(<App />, document.getElementById("app"));