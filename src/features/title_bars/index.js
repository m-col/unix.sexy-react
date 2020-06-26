import React from 'react';
import { useSelector } from 'react-redux';

import { selectTitleBars } from './slice';


export default function TitleBar(props) {
  const titleBars = useSelector(selectTitleBars);

	if (!titleBars.enabled) {
		return null;
	};

	return (
		<div
			className="title-bar"
			style={{
				backgroundColor: (props.focussed ? titleBars.colourFocus : titleBars.colour),
				height: `${titleBars.width}px`,
				width: "100%",
				color: (props.focussed ? titleBars.textColourFocus : titleBars.textColour),
			}}
		>
			term
		</div>
	);
};
