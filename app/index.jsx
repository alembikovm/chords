import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { StyleSheetManager } from 'styled-components';
import { ThemeProvider, Button } from 'fronton-react';
import GlobalStyle from './GlobalStyle';

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<StyleSheetManager disableVendorPrefixes={process.env.NODE_ENV === 'development'}>
			<ThemeProvider>
				<GlobalStyle />
				<Router>
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/about">About</Link>
							</li>
						</ul>
					</nav>
					<Switch>
						<Route exact path="/">
							<Button kind="regular" size="m" variant="primary">
								Button
							</Button>
						</Route>
						<Route path="/about">
							About Page
						</Route>
					</Switch>
				</Router>
			</ThemeProvider>
		</StyleSheetManager>,
		document.getElementById('root')
	);
});
