import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ColorPicker from 'rc-color-picker';
import 'rc-color-picker/assets/index.css';

import {
	toggle,
	setColour,
	setWidth,
  selectTitleBars,
} from './slice';
import OptBox from 'components/optbox';
import Switch from 'components/switch';


export function TitleBarCtl() {
  const style = useSelector(selectTitleBars);
  const dispatch = useDispatch();

	return (
		<OptBox className="titleBarCtl" label="Title Bars">

			<div className="opt">
				Enabled
				<Switch
					onClick={() => dispatch(toggle())}
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

			<div className="opt">
				Width
				<input value={style.width} type="number" min="1"
					onChange={e => dispatch(setWidth(e.target.value))}
				/>
			</div>

		</OptBox>
	);
}