import { useSelector } from 'react-redux';

import { selectWallpaper, selectBackground } from './slice';


export default function Wallpaper() {
  const wallpaper = useSelector(selectWallpaper);
  const background = useSelector(selectBackground);

	if (wallpaper) {
		return {
				backgroundImage: `url(${wallpaper})`
		}
	}

	return {
			backgroundColor: background
	}
};
