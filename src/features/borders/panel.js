import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ColorPicker from 'rc-color-picker';
import 'rc-color-picker/assets/index.css';

import {
	setBorderRadius,
	setBorderWidth,
	setBordorColor,
	setBordorColorFocus,
	selectBorderStyle,
} from './slice';
import OptBox from 'components/optbox';


export function BorderCtl() {
  const style = useSelector(selectBorderStyle);
  const dispatch = useDispatch();

	return (
		<OptBox className="BorderCtl" label="Borders">

			<div>
				Corner radius
				<input value={style.borderRadius} type="number" min={0}
					onChange={e => dispatch(setBorderRadius(e.target.value))}
				/>
			</div>

			<div>
				Width
				<input value={style.borderWidth} type="number" min={0}
					onChange={e => dispatch(setBorderWidth(e.target.value))}
				/>
			</div>

			<div>
				Colour
				<input value={style.borderColor}
					onChange={e => dispatch(setBordorColor(e.target.value))}
				/>
				<ColorPicker
					color={style.borderColor}
					onChange={c => {
						dispatch(setBordorColor(c.color))
					}}
				>
				</ColorPicker>
			</div>

			<div>
				Focussed colour
				<input value={style.borderColorFocus}
					onChange={e => dispatch(setBordorColorFocus(e.target.value))}
				/>
				<ColorPicker
					color={style.borderColorFocus}
					onChange={c => {
						dispatch(setBordorColorFocus(c.color))
					}}
				>
				</ColorPicker>
			</div>

			<div>
				TODO: border styles
			</div>

		</OptBox>
	);
}
