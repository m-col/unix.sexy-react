import React from 'react';
import { useDispatch } from 'react-redux';

import './index.css';


export default function Switch(props) {
  const dispatch = useDispatch();

	return (
		<input 
			type="checkbox"
			className={`switch ${props.value ? "on" : "off"}`}
			onClick={() => dispatch(props.callback())}
			checked={props.value}
		/>
	);
}
