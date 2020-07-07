import React from 'react';
import { useSelector } from 'react-redux';

import { selectBackground } from 'features/background/slice';
import Wallpaper from 'features/background';
import Windows from 'features/windows';
import Panel from 'features/panel';
import StatusBar from 'features/status_bars';
import './index.css';


export function Desktop() {
  const background = useSelector(selectBackground);

	const style = {};
	if (background.wallpaper) {
		style.backgroundColor = background.tintColour;
	} else {
		style.backgroundColor = background.colour;
	};

	return (
		<div id="Desktop" style={style}>
			<Wallpaper />
			<Panel />
			<Windows />
			<StatusBar />
		</div>
	);
}

export default Desktop;
