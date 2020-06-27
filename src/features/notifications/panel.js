import React from 'react';

import OptBox from 'components/optbox';


export function NotificationCtl() {
	return (
		<OptBox className="NotificationCtl" label="Todos">
			<div>
				<ul>
					<li>dunst</li>
				</ul>
			</div>
		</OptBox>
	);
};
