import React from 'react';
import { useSelector } from 'react-redux';

import { selectTitleBars } from './slice';
import './index.css';


export default function TitleBar(props) {
  const titleBars = useSelector(selectTitleBars);

	if (!titleBars.enabled) {
		return null;
	};

	const style = {};

	if (props.focussed) {
		style.backgroundColor = titleBars.colourFocus;
		style.color = titleBars.textColourFocus;
	} else {
		style.backgroundColor = titleBars.colour;
		style.color = titleBars.textColour;
	};

	if (titleBars.position === "N" || titleBars.position === "S") {
		style.height = `${titleBars.width}px`;
		style.width = "100%";
		if (titleBars.position === "S") {
			style.position = "absolute";
			style.bottom = 0;
		};
	} else {
		style.height = "100%";
		style.width = `${titleBars.width}px`;
		if (titleBars.position === "E") {
			style.position = "absolute";
			style.right = 0;
			style.writingMode = "sideways-rl";
		} else {
			style.writingMode = "sideways-lr";
			style.display = "inline-block";
		};
	};

	return (
		<div
			className="title-bar"
			style={style}
		>
			term
		</div>
	);
};
