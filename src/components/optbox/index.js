import React from 'react';
import { useSelector } from 'react-redux';

import { selectWindowContent } from 'features/window_content/slice';
import './index.css';


export default function OptBox(props) {
	const windowContent  = useSelector(selectWindowContent);

	var className = 'optbox';
	if (props.className) {
		className += ` ${props.className}`
	}

	return (
		<div
			className={className}
			style={{width: props.width, color: windowContent.textColour}}
		>

			<h3>{props.label}</h3>
			{props.children}

		</div>
	);
}
