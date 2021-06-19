import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  padding: var(--space-150) var(--space-375);
  bottom: 0;
  left: 0;
  right: 0;
  
  z-index: 10;

  box-shadow: var(--box-shadow-m);
  background-color: var(--background-primary);
  
  & > :not(:first-child) {
    margin-left: var(--space-300);
  }
`;
