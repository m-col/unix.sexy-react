import React from 'react';
import { useSelector } from 'react-redux';

import Windows from '../../features/windows';
import { selectBackground, selectWallpaper } from '../../features/background';
import './index.css';


function GetWallpaper() {
  const wallpaper = useSelector(selectWallpaper);

	if (!wallpaper) {
		return null;
	}

	return (
		<img
			src={URL.createObjectURL(wallpaper)}
			style={{
				maxWidth: "100%",
				maxHeight: "100%",
				objectFit: "contain",
			}}
			alt=""
		/>
	)
}


export default function Desktop() {
  const background = useSelector(selectBackground);

	return (
		<div id="Desktop" style={{backgroundColor:background}}>
			<GetWallpaper />
			<Windows />
		</div>
	);
}
