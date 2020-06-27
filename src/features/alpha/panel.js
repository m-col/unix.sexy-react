import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	setAlpha,
	setAlphaFocus,
	selectAlpha,
} from './slice';
import OptBox from 'components/optbox';


export function AlphaCtl() {
  const alpha = useSelector(selectAlpha);
  const dispatch = useDispatch();

	return (
		<OptBox className="AlphaCtl" label="Alpha" width="150px">

			<div>
				Value
				<input value={alpha.value} type="number" min={0} max={100}
					onChange={e => dispatch(setAlpha(e.target.value))}
				/>
			</div>

			<div>
				Focussed
				<input value={alpha.valueFocus} type="number" min={0} max={100}
					onChange={e => dispatch(setAlphaFocus(e.target.value))}
				/>
			</div>

		</OptBox>
	);
}
