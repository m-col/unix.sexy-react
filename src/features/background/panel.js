import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setBackground, selectBackground, setWallpaper } from './slice';
import Colour from 'components/colour';
import OptBox from 'components/optbox';


export function BackgroundCtl() {
  const backgroundColour = useSelector(selectBackground);
  const dispatch = useDispatch();

	return (
		<OptBox className="BackgroundCtl" label="Background / Wallpaper">

			<div>
				Colour
				<Colour value={backgroundColour} callback={setBackground} />
			</div>

			<div>
				<input
					type="file"
					accept="image/*"
					multiple="false"
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

			<div>
				<ul>
					<li>wallpaper saturation</li>
					<li>wallpaper tint</li>
				</ul>
			</div>
		</OptBox>
	);
};
