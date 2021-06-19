import styled from 'styled-components';

export default styled.li`
  display: flex;
  
  padding: var(--space-275) var(--space-375);
  border-bottom: 1px solid var(--background-secondary);
  cursor: pointer;

  &:hover {
    background-color: var(--background-secondary);
  }
`;
