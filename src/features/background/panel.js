import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	setBackground,
	setWallpaper,
	removeWallpaper,
	setTint,
	selectBackground,
} from './slice';
import Button from 'components/button';
import Colour from 'components/colour';
import OptBox from 'components/optbox';


export function BackgroundCtl() {
  const background = useSelector(selectBackground);
  const dispatch = useDispatch();

	return (
		<OptBox className="BackgroundCtl" label="Background / Wallpaper" width="260px">

			<div>
				Colour
				<Colour value={background.colour} callback={setBackground} />
			</div>

			<div>
				<input
					type="file"
					accept="image/*"
					multiple="false"
					style={{width:"112px", marginLeft:"0"}}
					onChange={e => {
						if (e.target.files[0]) {
							let reader = new FileReader();
							reader.onload = (e) => {
								dispatch(setWallpaper(e.target.result));
							};
							reader.readAsDataURL(e.target.files[0]);
						}
					}}
				/>
				<Button text="Remove" callback={removeWallpaper} />
			</div>

			<div>
				Tint wallpaper
				<input value={background.tint} type="number" min={0} max={100}
					onChange={e => dispatch(setTint(e.target.value))}
				/>
			</div>
		</OptBox>
	);
};
