import styled from 'styled-components';

export default styled.input`
	position: absolute;
	z-index: -1;
	opacity: 0;

	& + label {
		display: inline-flex;
		align-items: center;
		user-select: none;
		cursor: pointer;

		&::before {
			content: '';
			display: inline-block;
			width: 16px;
			height: 16px;
			flex-shrink: 0;
			flex-grow: 0;
			border: 2px solid var(--control-secondary);;
			border-radius: 5px;
			background-repeat: no-repeat;
			background-position: center center;
			background-size: 75% 75%;
		}
	}

	&:checked+label::before {
		border-color: var(--control-primary);
		background-color: var(--control-primary);
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
	}

	&:checked:hover {
		background-color: var(--control_hover-primary);
	}

	&:not(:disabled):not(:checked)+label:hover::before {
		border-color: var(--control_hover-secondary);
	}
`;