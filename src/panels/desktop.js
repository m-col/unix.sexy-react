import React from 'react';

import Windows from 'features/windows';
import Wallpaper from 'features/background/index';


export function Desktop() {
	const wallpaper = Wallpaper();

	return (
		<div id="Desktop" style={wallpaper}>
			<Windows />
		</div>
	);
}

export default Desktop;
