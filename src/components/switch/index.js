import React from 'react';

import './index.css';


export default function Switch(props) {
	return (
		<input 
			type="checkbox"
			className={`switch ${props.value ? "on" : "off"}`}
			onClick={props.onClick}
			checked={props.value}
		/>
	);
}
