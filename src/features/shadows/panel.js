import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ColorPicker from 'rc-color-picker';
import 'rc-color-picker/assets/index.css';

import {
	toggleShadows,
	selectShadowStyle,
	setHOffset,
	setVOffset,
	setBlur,
	setColour,
} from './slice';
import OptBox from 'components/optbox';
import Switch from 'components/switch';


export function ShadowCtl() {
  const style = useSelector(selectShadowStyle);
  const dispatch = useDispatch();

	return (
		<OptBox className="shadowCtl" label="Shadows">

			<div>
				Enabled
				<Switch
					onClick={() => dispatch(toggleShadows())}
					value={style.enabled}
				/>

				Colour
				<input value={style.colour}
					onChange={e => dispatch(setColour(e.target.value))}
				/>
				<ColorPicker
					color={style.colour}
					onChange={c => {
							dispatch(setColour(c.color))
						}}
					>
				</ColorPicker>
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
