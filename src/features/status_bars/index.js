import React from 'react';
import { useSelector } from 'react-redux';

import { selectStatusBars } from './slice';
import { selectShadowStyleCSS } from 'features/shadows/slice';
import ContextMenu from 'components/menu';
import Menu from './menu';
import './index.css';


const ids = ["top", "bottom"];


export default function StatusBar() {
  const statusBars = useSelector(selectStatusBars);
	const shadows = useSelector(selectShadowStyleCSS);

	return (
		ids.map((id, index) => {

			if (!statusBars[id].enabled) {
				return null;
			}

			let style = {
				width: `${statusBars[id].width}px`,
				height: `${statusBars[id].height}px`,
				backgroundColor: statusBars[id].backgroundColor,
				color: statusBars[id].color,
				left: `${statusBars[id].xOffset}px`,
				borderRadius: `${statusBars[id].cornerRadius}px`,
				...statusBars[id].shadows ? shadows : null,
			};
			style[id] = `${statusBars[id].yOffset}px`;

			return (
				<div
					className="status-bar"
					style={style}
				>
					<ContextMenu id={id} menu={Menu} position={id === "bottom" ? "above" : "below"}>
					</ContextMenu>
				</div>
			);

		})
	);
};
