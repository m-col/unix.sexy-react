import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectWindowContentCSS } from 'features/window_content/slice';
import './index.css';


export default function ContextMenu(props) {
	const windowContextStyle = useSelector(selectWindowContentCSS);
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
