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
		<OptBox className="titleBarCtl" label="Title Bars">

			<div>
				Enabled
				<Switch value={style.enabled} callback={toggle} />

				Colour
				<Colour value={style.colour} onChange={setColour} />
			</div>

			<div>
				Text colour
				<Colour value={style.textColour} onChange={setTextColour} />
			</div>

			<div>
				Focussed colour
				<Colour value={style.colourFocus} onChange={setColourFocus} />

				Focussed text colour
				<Colour value={style.textColourFocus} onChange={setTextColourFocus} />
			</div>


			<div>
				Width
				<input value={style.width} type="number" min="0"
					onChange={e => dispatch(setWidth(e.target.value))}
				/>
			</div>

		</OptBox>
	);
}
