import React from 'react';

import { addWindow, delWindow } from './slice';
import Button from 'components/button';
import OptBox from 'components/optbox';


export function WindowCtl() {
	return (
		<OptBox className="WindowCtl" label="Number" width="70px">
			<div>
				<Button text={"+"} callback={addWindow} />
				<Button text={"-"} callback={delWindow} />
			</div>
		</OptBox>
	);
}

