import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Color from 'components/color';
import OptBox from 'components/optbox';

import {
	setBorderRadius,
	setBorderWidth,
	setBorderColor,
	setBorderColorFocus,
	selectBorderStyle,
} from './slice';


export function BorderCtl() {
  const style = useSelector(selectBorderStyle);
  const dispatch = useDispatch();

	return (
		<OptBox className="BorderCtl" label="Borders" width="260px">

			<div>
				Width
				<input value={style.borderWidth} type="number" min={0}
					onChange={e => dispatch(setBorderWidth(e.target.value))}
				/>
			</div>

			<div>
				Corner radius
				<input value={style.borderRadius} type="number" min={0}
					onChange={e => dispatch(setBorderRadius(e.target.value))}
				/>
			</div>

			<div>
				Color
				<Color value={style.borderColor} callback={setBorderColor} />
			</div>

			<div>
				Focussed color
				<Color value={style.borderColorFocus} callback={setBorderColorFocus} />
			</div>

		</OptBox>
	);
}
