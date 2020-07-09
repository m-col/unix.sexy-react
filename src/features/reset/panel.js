import React from 'react';

import Button from 'components/button';
import OptBox from 'components/optbox';

import reset from './slice.js';


export function ResetCtl() {

  return (
		<OptBox className="ResetCtl" label="State" width="100px">

			<div >
				<Button callback={reset} text="Reset" />
			</div>

		</OptBox>
	)
}
