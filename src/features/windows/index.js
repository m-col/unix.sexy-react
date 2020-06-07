import React from 'react';
import { Rnd } from 'react-rnd';
import { useDispatch, useSelector } from 'react-redux';

import { selectPositions, dragWindow, resizeWindow } from './slice';
import { selectShadowStyleCSS } from 'features/shadows/slice';


export default function Windows() {
  const positions = useSelector(selectPositions);
  const shadowStyle = useSelector(selectShadowStyleCSS);
  const dispatch = useDispatch();

	return (
		positions.map((position, key) => {
			return (
				<Rnd
					bounds="parent"
					minWidth="25"
					minHeight="25"
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
					style={{boxShadow: shadowStyle}}
				>
				</Rnd>
			)
		})
	)
}
