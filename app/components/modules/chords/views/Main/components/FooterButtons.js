import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: flex-end;
  padding: var(--space-150) var(--space-375);

  box-shadow: var(--box-shadow-m);
  background-color: var(--background-primary);
  
  & > :not(:first-child) {
    margin-left: var(--space-300);
  }
`;
