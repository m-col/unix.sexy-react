import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ColorPicker from 'rc-color-picker';
import 'rc-color-picker/assets/index.css';

import {
	setBorderRadius,
	setBorderWidth,
	setBordorColor,
	selectBorderStyle,
} from './slice';
import OptBox from 'components/optbox';


export function BorderCtl() {
  const style = useSelector(selectBorderStyle);
  const dispatch = useDispatch();

	return (
		<OptBox className="BorderCtl" label="Borders">

			<div className="opt">
				Corner radius
				<input value={style.borderRadius} type="number" min={0}
					onChange={e => dispatch(setBorderRadius(e.target.value))}
				/>
			</div>

			<div className="opt">
				Width
				<input value={style.borderWidth} type="number" min={0}
					onChange={e => dispatch(setBorderWidth(e.target.value))}
				/>
			</div>

			<div className="opt">
				Color
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

			<div className="opt">
				TODO: border styles
			</div>

		</OptBox>
	);
}
