import React from 'react';
import Switch from './Switch';

function Switcher({id, checked, onChangeHandler}) {
	return (
		<Switch for={id}>
			<input type='checkbox' id={id} checked={checked} onChange={onChangeHandler} />
			<div className='slider round'></div>
		</Switch>
	);
}

export default Switcher;
