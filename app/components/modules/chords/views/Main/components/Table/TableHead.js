import styled from 'styled-components';

export default styled.thead`
  display: table;
  width: 100%;
  table-layout: fixed;
  //width: calc(100% - 1rem);

  th {
    text-align: left;
    font-weight: 500;
    border-bottom: 3px solid var(--control-secondary);
  }
`;
