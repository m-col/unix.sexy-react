import React from 'react';
import { useSelector } from 'react-redux';

import { selectWindowContent } from './slice';


export default function WindowContent(props) {
  const windowContent = useSelector(selectWindowContent);

	return (
		<div
			className="window-content"
			style={{
				padding: `${windowContent.padding}px`,
			}}>
			{windowContent.text &&
				<div className="window-text">
					sample text here
				</div>
			}
		</div>
	);
};
