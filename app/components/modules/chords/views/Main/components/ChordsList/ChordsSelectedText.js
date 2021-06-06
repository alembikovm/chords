import styled from 'styled-components';

export default styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: ${props => props.color || 'var(--text-minor)'};
`;
