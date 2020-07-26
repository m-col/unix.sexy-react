import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Color from 'components/color';
import OptBox from 'components/optbox';
import Switch from 'components/switch';
import {
	toggleShadows,
	selectShadowStyle,
	setHOffset,
	setVOffset,
	setBlur,
	setColor,
} from './slice';


export function ShadowCtl() {
  const style = useSelector(selectShadowStyle);
  const dispatch = useDispatch();

	return (
		<OptBox className="shadowCtl" label="Shadows" width="280px">

			<div>
				Enabled
				<Switch value={style.enabled} callback={toggleShadows} />

				Color
				<Color value={style.color} callback={setColor} />
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
