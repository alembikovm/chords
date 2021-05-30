import styled from "styled-components";

export default styled.li`
  display: flex;
  align-items: start;
  padding: 22px 30px;
  border-bottom: 1px solid var(--background-secondary);
  cursor: pointer;
  
  &:hover {
    background-color: var(--background-secondary);
  }
`;
