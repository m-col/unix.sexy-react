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
		...windowContentCSS,
	};

	if (titleBars.enabled) {
		if (titleBars.position === "N" || titleBars.position === "S") {
			style.height = `calc(100% - ${titleBars.width}px)`
			style.width = "100%";
		} else {
			style.height = "100%";
			style.width = `calc(100% - ${titleBars.width}px)`;
			if (titleBars.position === "W") {
				style.left = titleBars.width;
				style.top = 0;
			};
		};
	};

	var text = "";
	if (props.id === 0) {
		text = "[charlie@chocfactory ~]$ sb () {\n"
				 + "> sed 's/.*/\\L&/g; s/\\(.\\{1\\}\\)\\(.\\)/\\1\\U\\2/g' <<< \"$@\"\n"
				 + "> }\n"
				 + "[charlie@chocfactory ~]$ sb btw i use arch\n"
				 + "bTw i uSe aRcH";
	};

	return (
		<div
			className="window-content"
			style={style}
		>
		{windowContent.text &&
			<textarea style={windowContentCSS}>
				{text}
			</textarea>
		}
		</div>
	);
};
