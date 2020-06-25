import React from 'react';

import OptBox from 'components/optbox';


export function NotificationCtl() {
	return (
		<OptBox className="NotificationCtl" label="Todos">
			<div className="opt">
				<ul>
					<li>dunst</li>
				</ul>
			</div>
		</OptBox>
	);
};
