import React from 'react';
import { useDispatch } from 'react-redux';
import ColorPicker from 'rc-color-picker';
import 'rc-color-picker/assets/index.css';

import './index.css';


function fixColor(color) {
	if (color.length === 0) {
		color = "inherit"
	} else if (color[0] !== '#') {
		color = '#' + color
	}
	return color
}


export default function Color(props) {
  const dispatch = useDispatch();

	return (
		<>

			<input value={props.value}
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
