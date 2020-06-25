import React from 'react';

import OptBox from 'components/optbox';


export function StatusBarCtl() {
	return (
		<OptBox className="StatusBarCtl" label="Todos">
			<div className="opt">
				<ul>
					<li>polybar</li>
					<li>lemonbar</li>
					<li>i3blocks</li>
					<li>Qtile bar</li>
				</ul>
			</div>
		</OptBox>
	);
};
