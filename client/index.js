import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	body {
		background: #F4F4F4;
		padding: 0;
		margin: 0;
	}
`

const App = () => {
	return <Router>
		<GlobalStyle />
	</Router>;
}

ReactDOM.render(<App />, document.getElementById("app"));