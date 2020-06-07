import React from 'react';
import { useDispatch } from 'react-redux';

import reset from './slice.js';


export function ResetCtl() {
  const dispatch = useDispatch();

  return (
		<button onClick={() => dispatch(reset())}>
			Reset
		</button>
	)
}
