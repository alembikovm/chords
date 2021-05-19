import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { StyleSheetManager } from 'styled-components';
import { ThemeProvider } from 'fronton-react';
import GlobalStyle from './GlobalStyle';
import Layout from './components/Layout';
import {Chords} from './components/modules';

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<StyleSheetManager disableVendorPrefixes={process.env.NODE_ENV === 'development'}>
			<>
				<GlobalStyle />
				<ThemeProvider>
					<Router>
						<Layout>
							<Chords />
						</Layout>
					</Router>
				</ThemeProvider>
			</>
		</StyleSheetManager>,
		document.getElementById('root')
	);
});
