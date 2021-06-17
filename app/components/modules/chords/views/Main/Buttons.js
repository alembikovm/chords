import styled from 'styled-components';

export default styled.div`
	display: flex;
	align-items: center;

	& > :not(:last-child) {
		margin-right: var(--space-300);
	}
`;