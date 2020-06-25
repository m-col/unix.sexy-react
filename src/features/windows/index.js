import React from 'react';
import { Rnd } from 'react-rnd';
import { useDispatch, useSelector } from 'react-redux';

import { selectPositions, dragWindow, resizeWindow } from './slice';
import { selectWindowContent, selectWindowContentCSS } from 'features/window_content/slice';
import TitleBar from 'features/title_bars';
import { selectShadowStyleCSS } from 'features/shadows/slice';
import { selectBorderStyle } from 'features/borders/slice';


export default function Windows() {
  const dispatch = useDispatch();
  const positions = useSelector(selectPositions);
  const windowContent = useSelector(selectWindowContent);
  const windowContentStyle = useSelector(selectWindowContentCSS);
  const shadowStyle = useSelector(selectShadowStyleCSS);
  const borderStyle = useSelector(selectBorderStyle);

	let style = {...shadowStyle, ...borderStyle, ...windowContentStyle};

	return (
		positions.map((position, key) => {
			return (
				<Rnd
					bounds="parent"
					minWidth="20"
					minHeight="20"
					enableResizing={{
						right:true, bottom:true, bottomRight:true
					}}
					size={{
						width: position.width,  height: position.height
					}}
					position={{
						x: position.x, y: position.y
					}}
				  onDragStop={
						(e, d) => {dispatch(dragWindow({key: key, x: d.x, y: d.y}))}
					}
					onResizeStop={
						(e, dir, ref, d, pos) => {dispatch(resizeWindow({key: key, d:d }))}
					}
					id={key}
					className="Window"
					style={style}
				>

				<TitleBar />

				<div
					className="window-content"
					style={{
						padding: `${windowContent.padding}px`,
					}}>
					{windowContent.text &&
						<div className="window-text">
							sample text here
						</div>
					}
				</div>

				</Rnd>
			)
		})
	)
}
