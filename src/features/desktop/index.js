import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { enable } from 'features/context_menus/slice';
import { selectBackground } from 'features/background/slice';
import Wallpaper from 'features/background';
import ContextMenus from 'features/context_menus';
import Panel from 'features/panel';
import StatusBar from 'features/status_bars';
import Windows from 'features/windows';
import './index.css';


export default function Desktop() {
  const dispatch = useDispatch();
  const background = useSelector(selectBackground);

	const style = {};
	if (background.wallpaper) {
		style.backgroundColor = background.tintColour;
	} else {
		style.backgroundColor = background.colour;
	};

	return (
		<div
			id="Desktop"
			style={style}
			onContextMenu={e => dispatch(enable({id: "background", e: e}))}
		>

			<Wallpaper />
			<Panel />
			<Windows />
			<StatusBar />
			<ContextMenus />

		</div>
	);
}
