import React from 'react';

import './index.css';


export default function OptBox(props) {
	return (
		<div className={`optbox ${props.className}`}>
			<h3>{props.label}</h3>
			{props.children}
		</div>
	);
}
