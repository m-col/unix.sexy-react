import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import { useDispatch, useSelector } from 'react-redux';

import TitleBar from 'features/title_bars';
import WindowContent from 'features/window_content';
import './index.css';

import { selectPositions, dragWindow, resizeWindow } from './slice';
import { selectShadowStyleCSS } from 'features/shadows/slice';
import { selectBorderStyle, selectBorderFocusStyle } from 'features/borders/slice';
import { selectAlphaStyle, selectAlphaFocusStyle } from 'features/alpha/slice';


export default function Windows() {
  const dispatch = useDispatch();
  const positions = useSelector(selectPositions);
  const [focussed, setFocus] = useState(0);

	const style = {
		...useSelector(selectShadowStyleCSS),
		...useSelector(selectBorderStyle),
		...useSelector(selectAlphaStyle),
	};

	const focusStyle = {
		...style,
		...useSelector(selectBorderFocusStyle),
		...useSelector(selectAlphaFocusStyle),
		zIndex: 2,
	};

	return (
		positions.map((position, id) => {
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
				  onDragStart={
						() => setFocus(id)
					}
				  onDragStop={
						(e, d) => {dispatch(dragWindow({id: id, x: d.x, y: d.y}))}
					}
					onResizeStop={
						(e, dir, ref, d, pos) => {dispatch(resizeWindow({id: id, d:d }))}
					}
					id={id}
					className="Window"
					style={(id === focussed) ? focusStyle : style}
					onClick={() => setFocus(id)}
				>

					<TitleBar
						focussed={(id === focussed)}
					/>

					<WindowContent id={id}/>

				</Rnd>
			)
		})
	)
}
