import styled from 'styled-components';

export default styled.div`
	display: flex;
	align-items: center;

	& > :nth-child(1n) {
		margin-left: var(--space-300);
	}
`;