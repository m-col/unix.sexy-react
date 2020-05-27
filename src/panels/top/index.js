import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setBackground } from '../../features/background';
import Tabs from '../../features/tabs/Tabs';
import './index.css';


export function Top() {
  const [colour, setNewBackground] = useState('#5566ff');
  const dispatch = useDispatch();

	return (
		<div id="Top">
			<Tabs>
				<div label="Basic Settings">
					Set background:
						<input
							aria-label="Set background colour"
							value={colour}
							onChange={e => setNewBackground(e.target.value)}
						/>
						<button onClick={() => dispatch(setBackground(colour))}>
							Set
						</button>

				</div>

				<div label="Windows">
					<ul>
						<li>Border styles</li>
						<li>Title bars</li>
						<li>Rounded corners</li>
					</ul>
				</div>

				<div label="Status bars">
					<ul>
						<li>polybar</li>
						<li>lemonbar</li>
						<li>i3blocks</li>
						<li>Qtile bar</li>
					</ul>
				</div>

				<div label="Launchers">
					<ul>
						<li>rofi / dmenu</li>
						<li>cairo-dock</li>
						<li>xmenu</li>
						<li>DE-specific?</li>
					</ul>
				</div>

				<div label="Notification">
					<ul>
						<li>dunst</li>
					</ul>
				</div>

				<div label="Extras">
					<ul>
						<li>picom</li>
						<li>cursor</li>
					</ul>
				</div>

			</Tabs>
		</div>
	);
}

export default Top;
