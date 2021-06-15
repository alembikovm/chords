import styled from "styled-components";

export default styled.ul`
  overflow-y: auto;
  
  & > :not(:last-child) {
    border-bottom: 1px solid var(--background-secondary);
  }
`;