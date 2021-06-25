import styled from 'styled-components';

export default styled.div`
	display: flex;
	flex-direction: column;

	& > :not(:last-child) {
		margin-bottom: var(--space-500);
	}
`;
