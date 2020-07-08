import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	setPosition,
	selectStatusBars,
} from './slice';
import OptBox from 'components/optbox';
import Option from 'components/option';


export function StatusBarCtl() {
  const style = useSelector(selectStatusBars);
  const dispatch = useDispatch();

	return (
		<>
			<OptBox className="StatusBarCtl" label="Bars" width={190}>

				<div>
					<Option
						value={style.position}
						options={[
							{key: "none", callback: () => dispatch(setPosition("none"))},
							{key: "top", callback: () => dispatch(setPosition("top"))},
							{key: "bottom", callback: () => dispatch(setPosition("bottom"))},
						]}
					/>
				</div>

			</OptBox>

		</>
	);
};
