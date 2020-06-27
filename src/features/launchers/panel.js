import React from 'react';

import OptBox from 'components/optbox';


export function LauncherCtl() {
	return (
		<OptBox className="LauncherCtl" label="Todos">
			<div>
				<ul>
					<li>rofi / dmenu</li>
					<li>cairo-dock</li>
					<li>xmenu</li>
					<li>DE-specific?</li>
				</ul>
			</div>
		</OptBox>
	);
};
