import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ColorPicker from 'rc-color-picker';
import 'rc-color-picker/assets/index.css';

import {
	setColour,
	toggleText,
	setTextColour,
	setPadding, selectWindowContent
} from './slice';
import OptBox from 'features/optbox';
import Switch from 'features/switch';


export function WindowContentCtl() {
  const dispatch = useDispatch();
  const windowContent = useSelector(selectWindowContent);
  const [colour, setInputColour] = useState(windowContent.colour);
  const [textColour, setInputTextColour] = useState(windowContent.textColour);

	return (
		<OptBox className="WindowContentCtl" label="Window Content">

			<div className="opt">
				Colour
				<input
					value={colour}
					onChange={e => setInputColour(e.target.value)}
				/>

				<ColorPicker
					color={colour}
					onChange={c => {
						setInputColour(c.color)
						dispatch(setColour(colour))
					}}
				>
				</ColorPicker>

				<button onClick={() => dispatch(setColour(colour))}>
					Set
				</button>
			</div>

			<div className="opt">
				Text
				<Switch
					onClick={() => dispatch(toggleText())}
					value={windowContent.text}
				/>
			</div>

			<div className="opt">
				Text colour
				<input
					value={textColour}
					onChange={e => setInputTextColour(e.target.value)}
				/>

				<ColorPicker
					color={textColour}
					onChange={c => {
						setInputTextColour(c.color)
						dispatch(setTextColour(textColour))
					}}
					enableAlpha="false"
				>
				</ColorPicker>

				<button onClick={() => dispatch(setTextColour(textColour))}>
					Set
				</button>
			</div>
			
			<div className="opt">
				Padding
				<input value={windowContent.padding} type="number" min="0"
					onChange={e => dispatch(setPadding(e.target.value))}
				/>
			</div>

		</OptBox>
	);
}
