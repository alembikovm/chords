import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  & > :nth-child(1n) {
    margin-right: var(--space-150);
  }
`;
