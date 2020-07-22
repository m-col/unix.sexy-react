import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { enable } from 'features/context_menus/slice';
import Widgets from 'features/widgets';
import { selectShadowStyleCSS } from 'features/shadows/slice';
import { selectStatusBars } from './slice';
import './index.css';


const ids = ["top", "bottom"];


export default function StatusBar() {
  const dispatch = useDispatch();
  const statusBars = useSelector(selectStatusBars);
	const shadows = useSelector(selectShadowStyleCSS);

	return (
		ids.map(id => {

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
					onContextMenu={e => dispatch(enable({id: `status_bar_${id}`, e: e}))}
				>
					<Widgets id={id} />
				</div>
			);

		})
	);
};
