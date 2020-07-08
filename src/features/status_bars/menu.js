import React from 'react';
import { useSelector } from 'react-redux';

import {
	setColour,
	setTextColour,
	selectStatusBars,
} from './slice';
import Colour from 'components/colour';
import OptBox from 'components/optbox';


export function Menu() {
  const style = useSelector(selectStatusBars);

	return (
		<OptBox width={190}>
			<div>
				Colour
				<Colour value={style.backgroundColor} callback={setColour} />
				Text
				<Colour value={style.color} callback={setTextColour} />
			</div>
		</OptBox>
	);
};
