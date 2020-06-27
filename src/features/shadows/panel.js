import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	toggleShadows,
	selectShadowStyle,
	setHOffset,
	setVOffset,
	setBlur,
	setColour,
} from './slice';
import Colour from 'components/colour';
import OptBox from 'components/optbox';
import Switch from 'components/switch';


export function ShadowCtl() {
  const style = useSelector(selectShadowStyle);
  const dispatch = useDispatch();

	return (
		<OptBox className="shadowCtl" label="Shadows" width="260px">

			<div>
				Enabled
				<Switch callback={toggleShadows} value={style.enabled} />

				Colour
				<Colour callback={style.colour} value={setColour} />
			</div>

			<div>
				Horizontal offset
				<input value={style.hOffset} type="number" 
					onChange={e => dispatch(setHOffset(e.target.value))}
				/>
			</div>

			<div>
				Vertical offset
				<input value={style.vOffset} type="number" 
					onChange={e => dispatch(setVOffset(e.target.value))}
				/>
			</div>

			<div>
				Blur radius
				<input value={style.blur} type="number" min="0"
					onChange={e => dispatch(setBlur(e.target.value))}
				/>
			</div>

		</OptBox>
	);
}
