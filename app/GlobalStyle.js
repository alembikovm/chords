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
    
    table {
      border: none;
      border-spacing: 0px;

      th {
        text-align: left;
        font-weight: 500;
      }
      th, td {
        padding: 16px 12px;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.12px;
        color: var(--text-primary);
      }
      
      thead {
        th {
          border-bottom: 3px solid var(--control-secondary);
        }
      }
      
      tbody {
        tr {
          border-radius: 8px;

          &:hover {
            background-color: var(--background-secondary);
            
            td {
              &:first-child {
                border-top-left-radius: 8px;
                border-bottom-left-radius: 8px;
              }
              
              &:last-child {
                border-top-right-radius: 8px;
                border-bottom-right-radius: 8px;
              }
            }
          }
        }
      }
    }
`;
