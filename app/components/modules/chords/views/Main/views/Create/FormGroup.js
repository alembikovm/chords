import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin-top: 40px;
  margin-bottom: 10px;
  
  & > :not(:last-child) {
    margin-bottom: 30px;
  }
`;
