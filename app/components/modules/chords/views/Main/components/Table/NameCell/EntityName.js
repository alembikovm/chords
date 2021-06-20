import styled from 'styled-components';

export default styled.div`
  margin-left: var(--space-200);
  max-width: 276px;
  
  color: var(--text-primary);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  display: -moz-box;
  -moz-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  box-orient: vertical;

  text-overflow: ellipsis;
  overflow: hidden;
`;
