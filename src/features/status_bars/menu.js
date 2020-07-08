import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setWidth,
  setHeight,
	setXOffset,
	setYOffset,
	setColour,
	setTextColour,
	setCornerRadius,
	toggleShadows,
	selectStatusBars,
} from './slice';
import Colour from 'components/colour';
import OptBox from 'components/optbox';
import Switch from 'components/switch';


export default function Menu() {
  const style = useSelector(selectStatusBars);
  const dispatch = useDispatch();

	return (
		<div>
			<OptBox width={330}>
				<div>
					Colour
					<Colour value={style.backgroundColor} callback={setColour} />
					Text
					<Colour value={style.color} callback={setTextColour} />
				</div>

				<div>
					Width
					<input value={style.width} type="number" min="0"
						onChange={e => dispatch(setWidth(e.target.value))}
					/>
					Height
					<input value={style.height} type="number" min="0"
						onChange={e => dispatch(setHeight(e.target.value))}
					/>
				</div>

				<div>
					X offset
					<input value={style.xOffset} type="number"
						onChange={e => dispatch(setXOffset(e.target.value))}
					/>
					Y offset
					<input value={style.yOffset} type="number"
						onChange={e => dispatch(setYOffset(e.target.value))}
					/>
				</div>

				<div>
					Corner radius
					<input value={style.cornerRadius} type="number" min="0"
						onChange={e => dispatch(setCornerRadius(e.target.value))}
					/>

					Shadows
					<Switch value={style.shadows} callback={toggleShadows} />
				</div>

			</OptBox>
		</div>
	);
};
