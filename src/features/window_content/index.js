import React from 'react';
import { useSelector } from 'react-redux';

import { selectWindowContent } from './slice';
import './index.css';


const placeholder = "[charlie@chocfactory ~]$ sb () {\n"
									+ "> sed 's/.*/\\L&/g; s/\\(.\\{1\\}\\)\\(.\\)/\\1\\U\\2/g' <<< \"$@\"\n"
									+ "> }\n"
									+ "[charlie@chocfactory ~]$ sb btw i use arch\n"
									+ "bTw i uSe aRcH";


export default function WindowContent(props) {
  const windowContent = useSelector(selectWindowContent);

	return (
		<textarea
			style={{
				backgroundColor: windowContent.colour,
				color: windowContent.textColour,
			}}
		>

			{props.id === 0 ? placeholder : ""}

		</textarea>
	);
};
