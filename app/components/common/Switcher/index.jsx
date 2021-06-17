import React from 'react';
import Switch from './Switch';

function Switcher({id, checked, onChange}) {
	return (
		<Switch for={id}>
			<input type='checkbox' id={id} checked={checked} onChange={onChange} />
			<div className='slider round'></div>
		</Switch>
	);
}

export default Switcher;
