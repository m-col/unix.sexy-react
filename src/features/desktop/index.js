import React from 'react';
import { useSelector } from 'react-redux';

import { selectBackground } from 'features/background/slice';
import Wallpaper from 'features/background';
import ContextMenus from 'features/context_menus';
import Panel from 'features/panel';
import StatusBar from 'features/status_bars';
import Windows from 'features/windows';
import './index.css';


export default function Desktop() {
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
			<ContextMenus />

		</div>
	);
}
