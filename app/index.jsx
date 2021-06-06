import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import { StyleSheetManager } from 'styled-components';
import { ThemeProvider, SnackbarProvider } from 'fronton-react';
import GlobalStyle from './GlobalStyle';
import Layout from './components/Layout';
import screens from './screens';
import store from './store';

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<StyleSheetManager disableVendorPrefixes={process.env.NODE_ENV === 'development'}>
			<Provider store={store}>
				<GlobalStyle />
				<ThemeProvider>
					<SnackbarProvider>
						<Router>
							<Layout>
								{screens}
							</Layout>
						</Router>
					</SnackbarProvider>
				</ThemeProvider>
			</Provider>
		</StyleSheetManager>,
		document.getElementById('root')
	);
});
