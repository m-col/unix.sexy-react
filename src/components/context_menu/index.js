import React from 'react';
import { Rnd } from 'react-rnd';
import { useDispatch, useSelector } from 'react-redux';

import { disable, dragMenu } from 'features/context_menus/slice';
import { selectWindowContentCSS } from 'features/window_content/slice';
import { selectShadowStyleCSS } from 'features/shadows/slice';
import { selectBorderStyle } from 'features/borders/slice';
import './index.css';


export default function ContextMenu(props) {
	const dispatch = useDispatch();
	const windowContextStyle = useSelector(selectWindowContentCSS);

	const style = {
		...windowContextStyle,
		...useSelector(selectBorderStyle),
		...useSelector(selectShadowStyleCSS),
	};

	return (
		<Rnd
			bounds="parent"
			className="context-menu"
			style={style}
			enableResizing={false}
			position={{
				x: props.x,
				y: props.y,
			}}
			onDragStop={
				(e, d) => {dispatch(dragMenu({id: props.id, x: d.x, y: d.y}))}
			}
		>

			{props.children}

			<button
				onClick={() => dispatch(disable(props.id))}
				style={{color: windowContextStyle.color}}
			>
				Hide
			</button>

		</Rnd>
	);
}
