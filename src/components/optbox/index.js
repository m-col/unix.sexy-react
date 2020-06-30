import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectWindowContent } from 'features/window_content/slice';
import './index.css';


export default function OptBox(props) {
  const dispatch = useDispatch();
	const windowContent  = useSelector(selectWindowContent);

	return (
		<div
			className={`optbox ${props.className}`}
			style={{width: props.width, color:windowContent.textColour}}
		>
			<h3>{props.label}</h3>
			{props.children}
		</div>
	);
}
