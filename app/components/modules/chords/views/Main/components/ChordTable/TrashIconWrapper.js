import styled from 'styled-components';

export default styled.span`
  margin-left: 10px;

  svg {
    path {
      fill: var(--attention-primary);
    }
  }

  &:hover {
    cursor: pointer;
  }
`;
