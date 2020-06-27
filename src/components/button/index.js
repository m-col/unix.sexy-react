import React from 'react';
import { useDispatch } from 'react-redux';

import './index.css';


export default function Button(props) {
  const dispatch = useDispatch();

	return (
		<>
			<button
				onClick={() => dispatch(props.callback())}
			>
			{props.text}
			</button>
		</>
	);
}