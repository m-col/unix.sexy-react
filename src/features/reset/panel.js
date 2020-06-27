import React from 'react';
import { useDispatch } from 'react-redux';

import reset from './slice.js';
import OptBox from 'components/optbox';


export function ResetCtl() {
  const dispatch = useDispatch();

  return (
		<OptBox className="ResetCtl" label="Reset state">
			<div>
				<button onClick={() => dispatch(reset())}>
					Reset
				</button>
			</div>
		</OptBox>
	)
}
