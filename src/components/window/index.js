import React from 'react';
import { Rnd } from 'react-rnd';
import { useDispatch, useSelector } from 'react-redux';

import TitleBar from 'features/title_bars';
import { selectAlphaStyle, selectAlphaFocusStyle } from 'features/alpha/slice';
import { selectBorderStyle, selectBorderFocusStyle } from 'features/borders/slice';
import { selectShadowStyleCSS } from 'features/shadows/slice';
import { selectWindowContentCSS } from 'features/window_content/slice';
import { selectTitleBars } from 'features/title_bars/slice';
import { setFocus, selectFocus } from './slice';
import './index.css';


export default function Window(props) {
	/*
	 *	props:
	 *		id, zIndex, position, size, enableResizing, onDragStop, onResizeStop
	 */
	const dispatch = useDispatch();
	const windowContentStyle = useSelector(selectWindowContentCSS);
  const titleBars = useSelector(selectTitleBars);
	const focussed = props.id === useSelector(selectFocus);

	const style = {
		zIndex: props.zIndex,
		...useSelector(selectShadowStyleCSS),
		...useSelector(selectAlphaStyle),
		...useSelector(selectBorderStyle),
	};

	const focusStyle = {
		zIndex: 6,
		...useSelector(selectAlphaFocusStyle),
		...useSelector(selectBorderFocusStyle),
	};

	if (focussed) Object.assign(style, focusStyle);

	let contentOrder = 1;
	if (titleBars.enabled) {
		switch (titleBars.position) {
			default:
				style.flexDirection = "column";
				break;
			case "E":
				style.flexDirection = "row";
				contentOrder = -1;
				break;
			case "S":
				style.flexDirection = "column";
				contentOrder = -1;
				break;
			case "W":
				style.flexDirection = "row";
				break;
		};
	};

	return (
		<Rnd
			bounds="parent"
			className="Window"
			style={style}
			id={props.id}
			position={props.position}
			size={props.size}
			enableResizing={props.enableResizing}
			onDragStart={() => dispatch(setFocus(props.id))}
			onClick={() => dispatch(setFocus(props.id))}
			onDragStop={
				props.onDragStop ? (e, d) => props.onDragStop(e, d) : undefined
			}
			onResizeStop={
				props.onResizeStop ? (e, dir, ref, d, pos) => props.onResizeStop(e, dir, ref, d, pos) : undefined
			}
			cancel="input"
		>

			<TitleBar focussed={focussed} />

			<div
				className="window-content"
				style={{
					order: contentOrder,
					...windowContentStyle,
				}}
			>

				{props.children}

			</div>

		</Rnd>
	);
}
