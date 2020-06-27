import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	toggle,
	setColour,
	setTextColour,
	setColourFocus,
	setTextColourFocus,
	setWidth,
  selectTitleBars,
} from './slice';
import Colour from 'components/colour';
import OptBox from 'components/optbox';
import Switch from 'components/switch';


export function TitleBarCtl() {
  const style = useSelector(selectTitleBars);
  const dispatch = useDispatch();

	return (
		<OptBox className="titleBarCtl" label="Title Bars" width="340px">

			<div>
				Enabled
				<Switch value={style.enabled} callback={toggle} />

				Width
				<input value={style.width} type="number" min="0"
					onChange={e => dispatch(setWidth(e.target.value))}
				/>
			</div>

			<div>
				Colour
				<Colour value={style.colour} callback={setColour} />
				Text
				<Colour value={style.textColour} callback={setTextColour} />
			</div>

			<div>
				Focussed
				<Colour value={style.colourFocus} callback={setColourFocus} />

				Text
				<Colour value={style.textColourFocus} callback={setTextColourFocus} />
			</div>


		</OptBox>
	);
}
