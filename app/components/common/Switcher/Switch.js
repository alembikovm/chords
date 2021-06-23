import styled from 'styled-components';

export default styled.label`
	display: inline-block;
	height: 24px;
	position: relative;
	width: 44px;

	input {
		display:none;
	}

	.slider {
		background-color: #ccc;
		bottom: 0;
		cursor: pointer;
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
		transition: .4s;
	}

	.slider:before {
		background-color: #fff;
		bottom: 2px;
		content: "";
		height: 20px;
		left: 2px;
		position: absolute;
		transition: .4s;
		width: 20px;
	}

	input:checked + .slider {
		background-color: var(--control-primary);
	}

	input:disabled + .slider {
		opacity: 0.5;
	}

	input:checked + .slider:before {
		transform: translateX(20px);
	}

	.slider.round {
		border-radius: 100px;
	}

	.slider.round:before {
		border-radius: 50%;
	}

`;