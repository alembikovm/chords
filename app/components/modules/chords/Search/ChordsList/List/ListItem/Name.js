import styled from "styled-components";

export default styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
  max-width: 250px;
  font-size: 16px;
  line-height: 24px;
  color: #333333;
  white-space: normal;
  text-overflow: ellipsis;
`;