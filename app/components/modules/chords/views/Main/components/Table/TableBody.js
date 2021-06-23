import styled from 'styled-components';

export default styled.tbody`
  display: block;
  overflow: hidden auto;
  
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
`;
