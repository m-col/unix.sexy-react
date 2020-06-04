import React from 'react';
import { useDispatch } from 'react-redux';

import { addWindow, delWindow } from '../../features/windows/slice';


export default function WindowsTab() {
  const dispatch = useDispatch();

	return (
		<>
			<ul>
				<li>Border styles</li>
				<li>Title bars</li>
				<li>Rounded corners</li>
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
