import React from 'react';
import { useSelector } from 'react-redux';

import { selectBackground } from 'features/background/slice';
import Wallpaper from 'features/background';
import Windows from 'features/windows';


export function Desktop() {
  const background = useSelector(selectBackground);

	return (
		<div id="Desktop" style={{backgroundColor: background.colour}}>
			<Wallpaper />
			<Windows />
		</div>
	);
}

export default Desktop;
