import React from 'react';
import { useSelector } from 'react-redux';

import { selectTitleBars, selectTitleBarsCSS } from './slice';


export default function TitleBar() {
  const titleBars = useSelector(selectTitleBars);
  const titleBarsCSS = useSelector(selectTitleBarsCSS);

	if (!titleBars.enabled) {
		return null;
	};

	return (
		<div
			className="title-bar"
			style={titleBarsCSS}
		>
			term
		</div>
	);
};
