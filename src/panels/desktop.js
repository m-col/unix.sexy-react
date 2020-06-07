import React from 'react';
import { useSelector } from 'react-redux';

import Windows from 'features/windows';
import Wallpaper from 'features/background/index';
import { selectBackground } from 'features/background/slice';


export function Desktop() {
  const background = useSelector(selectBackground);

	return (
		<div id="Desktop" style={{backgroundColor: background}}>
			<Wallpaper />
			<Windows />
		</div>
	);
}

export default Desktop;
