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
    
    h1, h2 {
      font-weight: 500;
      font-size: 26px;
      line-height: 32px;
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
    
    table {
      max-width: fit-content;
      overflow-x: auto;
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
        display: table;
        width: 100%;
        table-layout: fixed;
        width: calc(100% - 1rem);
        th {
          border-bottom: 3px solid var(--control-secondary);
        }
      }
      
      tbody {
        display: block;
        overflow: auto;
        max-height: 775px;
        
        tr {
          display: table;
          width: 100%;
          table-layout: fixed;
          border-radius: 8px;

          .iconTrash {
            display: none;
          }
          
          &:hover {
            background-color: var(--background-secondary);
            
            .iconTrash {
              display: block;
            }
            
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
