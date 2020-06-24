import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ColorPicker from 'rc-color-picker';
import 'rc-color-picker/assets/index.css';

import { setBackground, selectBackground, setWallpaper } from './slice';
import OptBox from 'features/optbox';


export function BackgroundCtl() {
  const backgroundColour = useSelector(selectBackground);
  const dispatch = useDispatch();
  const [inputColour, setInputColour] = useState(backgroundColour);

	return (
		<OptBox className="BackgroundCtl" label="Background / Wallpaper">

			<div className="opt">
				Colour
				<input
					value={inputColour}
					onChange={e => setInputColour(e.target.value)}
				/>

				<ColorPicker
					color={inputColour}
					onChange={c => {
						setInputColour(c.color)
						dispatch(setBackground(inputColour))
					}}
					enableAlpha="false"
				>
				</ColorPicker>

				<button onClick={() => dispatch(setBackground(inputColour))}>
					Set
				</button>
			</div>

			<div className="opt">
				<input
					type="file"
					accept="image/*"
					multiple="false"
					style={{
						width: 'auto'
					}}
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

			<div className="opt">
				<ul>
					<li>wallpaper saturation</li>
					<li>wallpaper tint</li>
				</ul>
			</div>
		</OptBox>
	);
};
