import React from 'react';
import { useDispatch } from 'react-redux';

import { addWindow, delWindow } from './slice';
import OptBox from 'components/optbox';


export function WindowCtl() {
  const dispatch = useDispatch();

	return (
		<OptBox className="WindowCtl" label="Todos">
			<div>
				<ul>
					<li>Transparency + blur</li>
				</ul>
			</div>

			<div>
				Number
				<button onClick={() => dispatch(addWindow())}> + </button>
				<button onClick={() => dispatch(delWindow())}> - </button>
			</div>
		</OptBox>
	);
}

