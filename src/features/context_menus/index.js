import React from 'react';

import BackgroundMenu from 'features/background/menu';
import StatusBarMenu from 'features/status_bars/menu';
import TitleBarMenu from 'features/title_bars/menu';


export default function ContextMenus() {
	return (
		<>

			<BackgroundMenu />
			<StatusBarMenu id="top" />
			<StatusBarMenu id="bottom" />
			<TitleBarMenu />

		</>
	);
}
