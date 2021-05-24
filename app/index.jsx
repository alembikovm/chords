import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { StyleSheetManager } from 'styled-components';
import { ThemeProvider } from 'fronton-react';
import GlobalStyle from './GlobalStyle';
import Layout from './components/Layout';
import screens from './screens';

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<StyleSheetManager disableVendorPrefixes={process.env.NODE_ENV === 'development'}>
			<>
				<GlobalStyle />
				<ThemeProvider>
					<Router>
						<Layout>
							<Switch>
								{screens}
							</Switch>
						</Layout>
					</Router>
				</ThemeProvider>
			</>
		</StyleSheetManager>,
		document.getElementById('root')
	);
});
