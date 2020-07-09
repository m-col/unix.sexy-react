import React from 'react';
import { useSelector } from 'react-redux';

import StatusBarMenu from 'features/status_bars/menu';
import TitleBarMenu from 'features/title_bars/menu';
import './index.css';


export default function ContextMenus() {
	return (
		<>
			<StatusBarMenu id="top" />
			<StatusBarMenu id="bottom" />
			<TitleBarMenu />
		</>
	);
}
