import React from 'react';

import reset from './slice.js';
import Button from 'components/button';
import OptBox from 'components/optbox';


export function ResetCtl() {

  return (
		<OptBox className="ResetCtl" label="State" width="100px">
			<div >
				<Button callback={reset} text={"Reset"} />
			</div>
		</OptBox>
	)
}
