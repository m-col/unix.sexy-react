import React from 'react';
import { useDispatch } from 'react-redux';

import { addWindow, delWindow } from './slice';
import OptBox from 'features/optbox';


export function WindowCtl() {
  const dispatch = useDispatch();

	return (
		<OptBox className="WindowCtl" label="Todos">
			<div className="opt">
				<ul>
					<li>Border styles</li>
					<li>Title bars</li>
					<li>Transparency + blur</li>
				</ul>
			</div>

			<div className="opt">
				<button onClick={() => dispatch(addWindow())}> + </button>
				<button onClick={() => dispatch(delWindow())}> - </button>
			</div>
		</OptBox>
	);
}

