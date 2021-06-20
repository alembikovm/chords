import styled from 'styled-components';

export default styled.table`
  overflow-x: auto;
  border: none;
  border-spacing: 0px;
  height: 100%;

  th, td {
    padding: var(--space-200) var(--space-150);
    font-size: var(--space-175);
    line-height: var(--space-250);
    color: var(--text-primary);
  }
`;
