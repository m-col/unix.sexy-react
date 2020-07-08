import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectWindowContentCSS } from 'features/window_content/slice';
import './index.css';


export default function ContextMenu(props) {
	const style = useSelector(selectWindowContentCSS);
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

	return (
		<div
			className="context-menu"
			style={{left: state.x, top: state.y, ...style}}
		>
			<props.menu/>
			<button
				onClick={() => toggle({enabled: false, x: 0, y: 0})}
				style={{color: style.color}}
			>
			Hide
			</button>
		</div>
	);
}
