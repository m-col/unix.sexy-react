import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ColorPicker from 'rc-color-picker';
import 'rc-color-picker/assets/index.css';

import {
	selectShadowStyle,
	setHOffset,
	setVOffset,
	setBlur,
	setColour,
} from './slice';


export function ShadowCtl() {
  const style = useSelector(selectShadowStyle);
  const dispatch = useDispatch();

	return (
		<div className="shadowCtl">

			<input value={style.hOffset} type="number" 
				onChange={e => dispatch(setHOffset(e.target.value))}
			/>

			<input value={style.vOffset} type="number" 
				onChange={e => dispatch(setVOffset(e.target.value))}
			/>

			<input value={style.blur} type="number" 
				onChange={e => dispatch(setBlur(e.target.value))}
			/>

			<input value={style.colour}
				onChange={e => dispatch(setColour(e.target.value))}
			/>
			<ColorPicker
				color={style.colour}
				onChange={c => {
					dispatch(setColour(c.color))
				}}
				enableAlpha="false"
			>
			</ColorPicker>


		</div>
	);
}
