import React from 'react';
import { useSelector } from 'react-redux';

import { selectWindowContent, selectWindowContentCSS } from './slice';
import { selectTitleBars } from 'features/title_bars/slice';
import './index.css';


export default function WindowContent(props) {
  const windowContent = useSelector(selectWindowContent);
  const windowContentCSS = useSelector(selectWindowContentCSS);
  const titleBars = useSelector(selectTitleBars);

	const style =	{
		padding: `${windowContent.padding}px`,
		boxSizing: "border-box",
		height: "100%",
		...windowContentCSS,
	};

	if (titleBars.enabled) {
		style.height = `calc(100% - ${titleBars.width}px)`
	};

	return (
		<div
			className="window-content"
			style={style}
		>
				<textarea
					style={{
						...windowContentCSS,
					}}
				></textarea>
		</div>
	);
};
