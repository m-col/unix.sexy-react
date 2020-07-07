import React from 'react';
import { useSelector } from 'react-redux';

import { selectStatusBars } from './slice';
import { selectShadowStyleCSS } from 'features/shadows/slice';
import './index.css';

export default function StatusBar() {
  const statusBars = useSelector(selectStatusBars);
	const shadows = useSelector(selectShadowStyleCSS);

	if (statusBars.position === "none") {
		return null;
	};

	const style = {
		width: `${statusBars.width}px`,
		height: `${statusBars.height}px`,
		backgroundColor: statusBars.backgroundColor,
		color: statusBars.color,
		left: `${statusBars.xOffset}px`,
		borderRadius: `${statusBars.cornerRadius}px`,
		...statusBars.shadows ? shadows : null,
	};

	if (statusBars.position === "top") {
		style.top = `${statusBars.yOffset}px`;
	} else {
		style.bottom = `${statusBars.yOffset}px`;
	};

	return (
		<div className="status-bar" style={style}>
		</div>
	);
};
