import styled from 'styled-components';

export default styled.div`
  height: 100%;
  background-color: ${(props) => props.bg || 'inherit'};
`;
