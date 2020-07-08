import React from 'react';
import { useSelector } from 'react-redux';

import {
	toggle,
	selectStatusBars,
} from './slice';
import OptBox from 'components/optbox';
import Switch from 'components/switch';


export function StatusBarCtl() {
  const statusBars = useSelector(selectStatusBars);

	return (
		<>
			<OptBox className="StatusBarCtl" label="Bars" width={190}>

				<div>
					Top
					<Switch
						value={statusBars.top.enabled}
						callback={() => toggle("top")}
					/>
				</div>

				<div>
					Bottom
					<Switch
						value={statusBars.bottom.enabled}
						callback={() => toggle("bottom")}
					/>
				</div>

			</OptBox>

		</>
	);
};
