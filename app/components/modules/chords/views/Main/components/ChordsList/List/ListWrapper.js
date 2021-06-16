import styled from "styled-components";

export default styled.ul`
  position: absolute;
  inset: 0;
  overflow-y: auto;
  
  & > :not(:last-child) {
    border-bottom: 1px solid var(--background-secondary);
  }
`;