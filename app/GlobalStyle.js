import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		box-sizing: border-box;
    font-family: Roboto, sans-serif;
	}

	body {
		margin: 0;
    background-color: var(--background-secondary);
	}
   
  ::-webkit-scrollbar {
      background-color: #fff;
      width: 16px;
  }

  ::-webkit-scrollbar-track {
      background-color: #fff;
  }

  ::-webkit-scrollbar-thumb {
      background-color: #babac0;
      border-radius: 16px;
      border: 4px solid #fff;
  }

  ::-webkit-scrollbar-button {
      display:none;
  }

    h1, h2 {
      font-weight: 500;
      font-size: 26px;
      line-height: 32px;
      margin: 0px;
    }
    
    h3 {
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
      margin: 0px;
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
    
    .pagination {
      ul {
        justify-content: center;
      }
    }
    
    .input-block {
      display: block;
      position: relative;
    }
`;
