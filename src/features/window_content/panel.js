import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Color from 'components/color';
import OptBox from 'components/optbox';

import {
	setColor,
	setTextColor,
	setPadding, selectWindowContent
} from './slice';


export function WindowContentCtl() {
  const dispatch = useDispatch();
  const windowContent = useSelector(selectWindowContent);

	return (
		<OptBox className="WindowContentCtl" label="Window Content" width="240px">

			<div>
				Color
				<Color value={windowContent.color} callback={setColor} />
			</div>

			<div>
				Text color
				<Color value={windowContent.textColor} callback={setTextColor} />
			</div>
			
			<div>
				Padding
				<input value={windowContent.padding} type="number" min="0"
					onChange={e => dispatch(setPadding(e.target.value))}
				/>
			</div>

		</OptBox>
	);
}
