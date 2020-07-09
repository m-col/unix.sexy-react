import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectWindowContentCSS } from 'features/window_content/slice';
import { selectShadowStyleCSS } from 'features/shadows/slice';
import { selectBorderStyle } from 'features/borders/slice';
import './index.css';


export default function ContextMenu(props) {
	const windowContextStyle = useSelector(selectWindowContentCSS);
	const borderStyle = useSelector(selectBorderStyle);
	const shadowStyle = useSelector(selectShadowStyleCSS);

	const style = {
		left: props.x,
		...windowContextStyle,
		...borderStyle,
		...shadowStyle,
	};

	if (props.position === "above") {
		style.bottom = window.innerHeight - props.y;
	} else {
		style.top = props.y;
	};

	return (
		<div
			className="context-menu"
			style={style}
		>
		{props.children}
			<button
				//onClick={() => {enabled: false, x: 0, y: 0}}
				style={{color: windowContextStyle.color}}
			>
			Hide
			</button>
		</div>
	);
}
