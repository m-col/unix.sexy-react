import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ColorPicker from 'rc-color-picker';
import 'rc-color-picker/assets/index.css';

import { setBackground, selectBackground, setWallpaper } from './slice';


export function BackgroundCtl() {
  const backgroundColour = useSelector(selectBackground);
  const dispatch = useDispatch();
  const [inputColour, setInputColour] = useState(backgroundColour);

	return (
		<>
			Background:

			<input
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
				enableAlpha="false"
			>
			</ColorPicker>

			<button onClick={() => dispatch(setBackground(inputColour))}>
				Set
			</button>
		</>
	);
};


export function WallpaperCtl() {
  const dispatch = useDispatch();
	
	return (
		<>
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

			<ul>
				<li>wallpaper saturation</li>
				<li>wallpaper tint</li>
			</ul>
		</>
	)
}
