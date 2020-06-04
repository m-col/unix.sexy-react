import React from 'react';
import { useSelector } from 'react-redux';

import { selectWallpaper } from './slice';


export default function Wallpaper() {
  const wallpaper = useSelector(selectWallpaper);

	if (!wallpaper) {
		return null;
	}

	return (
		<img
			src={wallpaper}
			style={{
				maxWidth: "100%",
				maxHeight: "100%",
				objectFit: "contain",
			}}
			alt=""
		/>
	);
};
