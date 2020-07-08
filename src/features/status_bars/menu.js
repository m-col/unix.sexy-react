import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setWidth,
  setHeight,
	setXOffset,
	setYOffset,
	setColour,
	setTextColour,
	setCornerRadius,
	toggleShadows,
	selectStatusBars,
} from './slice';
import Colour from 'components/colour';
import OptBox from 'components/optbox';
import Switch from 'components/switch';


export default function Menu(props) {
  const statusBars = useSelector(selectStatusBars);
  const dispatch = useDispatch();
	const id = props.id;
	const style = statusBars[id];

	return (
		<div>
			<OptBox width={330}>
				<div>
					Colour
					<Colour
						value={style.backgroundColor}
						callback={colour => setColour({id: id, colour: colour})} 
					/>
					Text
					<Colour
						value={style.color}
						callback={colour => setTextColour({id: id, colour: colour})} 
					/>
				</div>

				<div>
					Width
					<input value={style.width} type="number" min="0"
						onChange={e => dispatch(setWidth({id: id, value: e.target.value}))}
					/>
					Height
					<input value={style.height} type="number" min="0"
						onChange={e => dispatch(setHeight({id: id, value: e.target.value}))}
					/>
				</div>

				<div>
					X offset
					<input value={style.xOffset} type="number"
						onChange={e => dispatch(setXOffset({id: id, value: e.target.value}))}
					/>
					Y offset
					<input value={style.yOffset} type="number"
						onChange={e => dispatch(setYOffset({id: id, value: e.target.value}))}
					/>
				</div>

				<div>
					Corner radius
					<input value={style.cornerRadius} type="number" min="0"
						onChange={e => dispatch(setCornerRadius({id: id, value: e.target.value}))}
					/>

					Shadows
					<Switch value={style.shadows} callback={() => toggleShadows(id)} />
				</div>

			</OptBox>
		</div>
	);
};
