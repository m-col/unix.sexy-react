import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Window from 'components/window';

import WindowContent from 'features/window_content';
import { selectPositions, dragWindow, resizeWindow } from './slice';
import './index.css';


export default function Windows() {
  const dispatch = useDispatch();
  const positions = useSelector(selectPositions);

	return (
		positions.map((position, id) => {
			return (
				<Window
					zIndex={2}
					position={{
						x: position.x, y: position.y
					}}
					enableResizing={{
						right:true, bottom:true, bottomRight:true
					}}
					size={{
						width: position.width,  height: position.height
					}}
				  onDragStop={
						(e, d) => {dispatch(dragWindow({id: id, x: d.x, y: d.y}))}
					}
					onResizeStop={
						(e, dir, ref, d, pos) => {dispatch(resizeWindow({id: id, d:d }))}
					}
					id={id}
				>

					<WindowContent id={id}/>

				</Window>
			)
		})
	)
}
