import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ColorPicker from 'rc-color-picker';
import 'rc-color-picker/assets/index.css';

import { setBackground, selectBackground, setWallpaper } from '../../features/background/slice';


export default function SettingsTab() {
  const backgroundColour = useSelector(selectBackground);
  const dispatch = useDispatch();
  const [inputColour, setInputColour] = useState(backgroundColour);

	return (
		<div id="background2">
			Set background:
				<input
					aria-label="Set background colour"
					value={inputColour}
					onChange={e => setInputColour(e.target.value)}
				/>
				<ColorPicker
					color={inputColour}
					alpha={100}
					onChange={c => {
						setInputColour(c.color)
						dispatch(setBackground(inputColour))
					}}
					placement="topLeft"
					className="some-class"
					enableAlpha="false"
				>
				</ColorPicker>
				<button onClick={() => dispatch(setBackground(inputColour))}>
					Set
				</button>

				<input
					type="file"
					accept="image/*"
					multiple="false"
					onChange={e => {
						if (e.target.files[0]) {
							let reader = new FileReader();
							reader.onload = (e) => {
								dispatch(setWallpaper(e.target.result));
							};
							reader.readAsDataURL(e.target.files[0]);
						}
					}}
				/>
		</div>
	);
}
