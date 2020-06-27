import React from 'react';
import { useSelector } from 'react-redux';

import { selectBackground } from 'features/background/slice';
import Wallpaper from 'features/background';
import Windows from 'features/windows';
import Panel from 'features/panel';
import './index.css';


export function Desktop() {
  const background = useSelector(selectBackground);

	return (
		<div id="Desktop" style={{backgroundColor: background.colour}}>
			<Wallpaper />
			<Panel />
			<Windows />
		</div>
	);
}

export default Desktop;
