import React from 'react';
import { Rnd } from 'react-rnd';
import { useSelector } from 'react-redux';

import { selectWindowCount } from './slice';
import './index.css';



export default function Windows() {
  const windowCount = useSelector(selectWindowCount);
	let arr = Array.from({length: windowCount});

	return (
		arr.map((un, key) => {
			return (
				<Rnd
					default={{
						x: 20,
						y: 20,
						width: "300px",
						height: "200px",
					}}
					id={key}
					className="Window"
				>
				</Rnd>
			)
		})
	)
}
