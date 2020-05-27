import React from 'react';
import { useSelector } from 'react-redux';
import { selectBackground } from '../../features/background';
import './index.css';


export function Desktop() {
  const background = useSelector(selectBackground);

	return (
		<div id="Desktop" style={{backgroundColor:background}}>
		</div>
	);
}

export default Desktop;
