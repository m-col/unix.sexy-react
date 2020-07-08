import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	setColour,
	setTextColour,
	selectStatusBars,
} from './slice';
import Colour from 'components/colour';
import OptBox from 'components/optbox';
import Switch from 'components/switch';


export function Menu() {
  const statusBars = useSelector(selectStatusBars);
  const dispatch = useDispatch();

	return (
		<div>
			<OptBox width={190}>
				<div>
					Colour
					<Colour value={statusBars.backgroundColor} callback={setColour} />
					Text
					<Colour value={statusBars.color} callback={setTextColour} />
				</div>
			</OptBox>
		</div>
	);
};
