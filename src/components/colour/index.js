import React from 'react';
import { useDispatch } from 'react-redux';
import ColorPicker from 'rc-color-picker';
import 'rc-color-picker/assets/index.css';

import './index.css';


function fixColour(colour) {
		if (colour[0] !== '#') {
			colour = '#' + colour
		}
		return colour
}


export default function Colour(props) {
  const dispatch = useDispatch();

	return (
		<>

			<input value={props.value}
				onChange={e => dispatch(props.callback(fixColour(e.target.value)))}
				className="colour"
			/>

			<ColorPicker
				color={props.value}
				onChange={c => dispatch(props.callback(fixColour(c.color)))}
				>
			</ColorPicker>

		</>
	);
}
