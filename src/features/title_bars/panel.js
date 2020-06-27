import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ColorPicker from 'rc-color-picker';
import 'rc-color-picker/assets/index.css';

import {
	toggle,
	setColour,
	setTextColour,
	setColourFocus,
	setTextColourFocus,
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

			<div>
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

			<div>
				Text colour
				<input value={style.textColour}
					onChange={e => dispatch(setTextColour(e.target.value))}
				/>
				<ColorPicker
					color={style.textColour}
					onChange={c => {
							dispatch(setTextColour(c.color))
						}}
					>
				</ColorPicker>
			</div>

			<div>
				Focussed colour
				<input value={style.colourFocus}
					onChange={e => dispatch(setColourFocus(e.target.value))}
				/>
				<ColorPicker
					color={style.colourFocus}
					onChange={c => {
							dispatch(setColourFocus(c.color))
						}}
					>
				</ColorPicker>

				Focussed text colour
				<input value={style.textColourFocus}
					onChange={e => dispatch(setTextColourFocus(e.target.value))}
				/>
				<ColorPicker
					color={style.textColourFocus}
					onChange={c => {
							dispatch(setTextColourFocus(c.color))
						}}
					>
				</ColorPicker>
			</div>


			<div>
				Width
				<input value={style.width} type="number" min="1"
					onChange={e => dispatch(setWidth(e.target.value))}
				/>
			</div>

		</OptBox>
	);
}
