import React from 'react';
import Switch from './Switch';

function Switcher({id, checked, onChangeHandler, disabled = false}) {
	return (
		<Switch for={id}>
			<input type='checkbox' id={id} checked={checked} onChange={onChangeHandler} disabled={disabled} />
			<div className='slider round'></div>
		</Switch>
	);
}

export default Switcher;
