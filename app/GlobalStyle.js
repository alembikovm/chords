import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		box-sizing: border-box;
        font-family: Roboto, sans-serif;
	}

	body {
		margin: 0;
	}
    
    a {
      text-decoration: none;
      color: inherit;
    }
    
    a:visited {
      color: inherit;
    }
    
    ul {
      padding: 0px;
      margin: 0px;
    }
`;
