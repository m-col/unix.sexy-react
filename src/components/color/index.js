import React from 'react';
import { useDispatch } from 'react-redux';
import ColorPicker from 'rc-color-picker';
import 'rc-color-picker/assets/index.css';

import './index.css';


function fixColor(color) {
	if (color.length === 0) {
		return "inherit"
	};

	if (color.length < 3) {
		if (color === 'b') {
			return "var(--background)"
		};

		if (color === 'f') {
			return "var(--foreground)"
		};

		if (/^[0-9]/.test(color)) {
			return `var(--color${color})`
		};
	};

	if (color[0] !== '#') {
		color = '#' + color
	}
	return color
}


export default function Color(props) {
  const dispatch = useDispatch();

	return (
		<>

			<input value={props.value.length === 7 ? props.value : undefined}
				onChange={e => dispatch(props.callback(fixColor(e.target.value)))}
				className="color"
			/>

			<ColorPicker
				color={props.value}
				onChange={c => dispatch(props.callback(fixColor(c.color)))}
				>
			</ColorPicker>

		</>
	);
}
