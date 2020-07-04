import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	setBackground,
	setWallpaper,
	removeWallpaper,
	setTint,
	setTintColour,
	selectBackground,
} from './slice';
import Button from 'components/button';
import Colour from 'components/colour';
import OptBox from 'components/optbox';


export function BackgroundCtl() {
  const background = useSelector(selectBackground);
  const dispatch = useDispatch();

	return (
		<>
			<OptBox className="BackgroundCtl" label="Background" width="220px">

				<div>
					Colour
					<Colour value={background.colour} callback={setBackground} />
				</div>

			</OptBox>

			<OptBox className="WallpaperCtl" label="Wallpaper" width="260px">

				<div>
					<div className="file-input">
						<div className="file-input-text">From file</div>
						<input
							type="file"
							accept="image/*"
							multiple="false"
							style={{marginLeft: 0, padding: 0, border: 0, width: "100%"}}
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
					</div>
					<Button text="Remove" callback={removeWallpaper} />
				</div>

				<div>
					Tint
					<input value={background.tint} type="number" min={0} max={100}
						onChange={e => dispatch(setTint(e.target.value))}
					/>
					<Colour value={background.tintColour} callback={setTintColour} />
				</div>
			</OptBox>
		</>
	);
};
