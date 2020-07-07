import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	setPosition,
  setWidth,
  setHeight,
	setColour,
	setTextColour,
	setXOffset,
	setYOffset,
	setCornerRadius,
	toggleShadows,
	selectStatusBars,
} from './slice';
import Colour from 'components/colour';
import OptBox from 'components/optbox';
import Option from 'components/option';
import Switch from 'components/switch';


export function StatusBarCtl() {
  const style = useSelector(selectStatusBars);
  const dispatch = useDispatch();

	return (
		<>
			<OptBox className="StatusBarCtl" label="Bars" width={190}>

				<div>
					<Option
						value={style.position}
						options={[
							{key: "none", callback: () => dispatch(setPosition("none"))},
							{key: "top", callback: () => dispatch(setPosition("top"))},
							{key: "bottom", callback: () => dispatch(setPosition("bottom"))},
						]}
					/>
				</div>

			</OptBox>

			<OptBox className="StatusBarCtl" label="Top Geometry" width={190}>

				<div>
					Width
					<input value={style.width} type="number" min="0"
						onChange={e => dispatch(setWidth(e.target.value))}
					/>
				</div>

				<div>
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
				</div>

				<div>
					Y offset
					<input value={style.yOffset} type="number"
						onChange={e => dispatch(setYOffset(e.target.value))}
					/>
				</div>

			</OptBox>

			<OptBox className="StatusBarCtl" label="Status bar" width={360}>

				<div>
					Colour
					<Colour value={style.backgroundColor} callback={setColour} />
					Text
					<Colour value={style.color} callback={setTextColour} />
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
		</>
	);
};
