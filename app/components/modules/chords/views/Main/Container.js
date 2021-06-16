import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-areas:
    'header header header'
    'filters filters filters'
    'list view view';
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 71px 1fr;
  max-width: 1512px;
  height: 100%;
`;

export default Container;
