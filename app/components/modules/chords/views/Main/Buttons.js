import styled from 'styled-components';

export default styled.div`
	display: flex;
	align-items: center;
    overflow-x: scroll;

	& > :not(:last-child) {
		margin-right: var(--space-300);
	}
`;
