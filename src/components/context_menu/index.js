import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Window from 'components/window';

import { disable, dragMenu } from 'features/context_menus/slice';
import { selectWindowContentCSS } from 'features/window_content/slice';


export default function ContextMenu(props) {
	const dispatch = useDispatch();
	const windowContentStyle = useSelector(selectWindowContentCSS);

	return (
		<Window
			enableResizing={false}
			position={{
				x: props.x,
				y: props.y,
			}}
			onDragStop={
				(e, d) => dispatch(dragMenu({id: props.id, x: d.x, y: d.y}))
			}
			zIndex={4}
			id={props.id}
		>

			{props.children}

			<button
				onClick={() => dispatch(disable(props.id))}
				style={{color: windowContentStyle.color}}
			>
				Close
			</button>

		</Window>
	);
}
