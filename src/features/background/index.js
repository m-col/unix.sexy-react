import React from 'react';
import { useSelector } from 'react-redux';

import { selectBackground } from './slice';
import './index.css';


export default function Wallpaper() {
  const background = useSelector(selectBackground);

	if (!background.wallpaper) {
		return null;
	};

	return (
		<div
			className="wallpaper"
			style={{
				backgroundImage: `url(${background.wallpaper})`,
				opacity: 1 - background.tint / 100,
			}}
		>
		</div>
	);
};
