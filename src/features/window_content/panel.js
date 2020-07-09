import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Colour from 'components/colour';
import OptBox from 'components/optbox';
import Switch from 'components/switch';

import {
	setColour,
	toggleText,
	setTextColour,
	setPadding, selectWindowContent
} from './slice';


export function WindowContentCtl() {
  const dispatch = useDispatch();
  const windowContent = useSelector(selectWindowContent);

	return (
		<OptBox className="WindowContentCtl" label="Window Content" width="240px">

			<div>
				Colour
				<Colour value={windowContent.colour} callback={setColour} />
			</div>

			<div>
				Text
				<Switch value={windowContent.text} callback={toggleText} />
			</div>

			<div>
				Text colour
				<Colour value={windowContent.textColour} callback={setTextColour} />
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
