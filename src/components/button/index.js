import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectWindowContent } from 'features/window_content/slice';
import './index.css';


export default function Button(props) {
  const dispatch = useDispatch();
	const windowContent  = useSelector(selectWindowContent);

	return (
		<>

			<button
				onClick={() => dispatch(props.callback())}
				style={{color: windowContent.textColour}}
			>
			{props.text}
			</button>

		</>
	);
}
