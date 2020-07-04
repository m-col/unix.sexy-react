import React from 'react';

import OptBox from 'components/optbox';
import './index.css';


export function About() {
	return (
		<OptBox className="AboutCtl" label="unix.sexy">
			<div>Desktop Environment Designer</div>
			<div>Developed by <a href="https://mcol.xyz">mcol</a></div>
			<div>Inspired by <a href="https://terminal.sexy">terminal.sexy</a></div>
			<div><a href="https://mcol.xyz/code/mcol/unix.sexy">Source</a></div>
		</OptBox>
	);
};
