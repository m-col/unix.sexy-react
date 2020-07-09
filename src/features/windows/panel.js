import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addWindow, delWindow } from './slice';
import { toggle, selectTitleBars } from 'features/title_bars/slice';
import Button from 'components/button';
import OptBox from 'components/optbox';
import Switch from 'components/switch';


export function WindowCtl() {
  const titleBars = useSelector(selectTitleBars);
  const dispatch = useDispatch();

	return (
		<OptBox className="WindowCtl" label="Settings" width="220px">

			<div>
				Number
				<Button text={"+"} callback={addWindow} />
				<Button text={"-"} callback={delWindow} />
			</div>

			<div>
				Title bars
				<Switch value={titleBars.enabled} callback={toggle} />
			</div>

		</OptBox>
	);
}

