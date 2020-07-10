import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { enable } from 'features/context_menus/slice';
import { selectBackground } from './slice';
import './index.css';


export default function Wallpaper() {
  const dispatch = useDispatch();
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
			onContextMenu={e => dispatch(enable({id: "background", e: e}))}
		>
		</div>
	);
};
