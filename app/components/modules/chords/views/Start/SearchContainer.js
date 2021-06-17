import styled from 'styled-components';

export default styled.div`
	display: flex;
	flex-direction: column;
	max-width: 360px;

	& > :not(:last-child) {
		margin-bottom: var(--space-500);
	}
`;