import React from 'react';
import { useDispatch } from 'react-redux';

import { addWindow, delWindow } from './slice';


export function WindowCtl() {
  const dispatch = useDispatch();

	return (
		<>
			<ul>
				<li>Border styles</li>
				<li>Title bars</li>
				<li>Rounded corners</li>
				<li>Shadows(picom/compton)</li>
			</ul>

			<button onClick={() => dispatch(addWindow())}>
				+
			</button>
			<button onClick={() => dispatch(delWindow())}>
				-
			</button>
		</>
	);
}

