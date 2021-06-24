import React from 'react';
import {useUniqID} from 'fronton-react';
import CustomCheckbox from './CustomCheckbox';

function Checkbox({
	checked,
	onChange,
}) {
	const checkoxId = useUniqID();

	return (
		<>
			<CustomCheckbox
				id={checkoxId}
				type="checkbox"
				checked={checked}
				onChange={(event) => onChange(event.target.checked)}
				onClick={(event) => event.stopPropagation()}
			/>
			<label htmlFor={checkoxId} onClick={(event) => event.stopPropagation()}></label>
		</>
	);
}

export default Checkbox;