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
  const [state, toggle] = useState({enabled: false, x: 0, y:0});

	const enable = (e) => {
		e.preventDefault();
		toggle({enabled: true, x: e.clientX, y: e.clientY})
	};

	if (!state.enabled) {
		return (
			<div className="has-context-menu" onContextMenu={enable}>
				{props.children}
			</div>
		);
	};

	const style = {
		left: state.x,
		...windowContextStyle,
		...borderStyle,
		...shadowStyle,
	};
	if (props.position == "above") {
		style.bottom = window.innerHeight - state.y;
	} else {
		style.top = state.y;
	};

	return (
		<div
			className="context-menu"
			style={style}
		>
			<props.menu id={props.id} />
			<button
				onClick={() => toggle({enabled: false, x: 0, y: 0})}
				style={{color: windowContextStyle.color}}
			>
			Hide
			</button>
		</div>
	);
}
