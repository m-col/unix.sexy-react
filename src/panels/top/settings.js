import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setBackground, selectBackground, setWallpaper } from '../../features/background';


export default function SettingsTab() {
  const backgroundColour = useSelector(selectBackground);
  const dispatch = useDispatch();
  const [inputColour, setInputColour] = useState(backgroundColour);

	return (
		<>
			Set background:
				<input
					aria-label="Set background colour"
					value={inputColour}
					onChange={e => setInputColour(e.target.value)}
				/>
				<button onClick={() => dispatch(setBackground(inputColour))}>
					Set
				</button>

				<input
					type="file"
					accept="image/*"
					multiple="false"
					onChange={e => dispatch(setWallpaper(e.target.files[0]))}
				/>
		</>
	);
}
