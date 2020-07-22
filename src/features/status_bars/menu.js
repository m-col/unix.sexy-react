import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'components/button';
import Colour from 'components/colour';
import ContextMenu from 'components/context_menu';
import OptBox from 'components/optbox';
import Switch from 'components/switch';

import { selectContextMenus } from 'features/context_menus/slice';
import { addWidget, delWidget } from 'features/widgets/slice';
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


export default function Menu(props) {
  const dispatch = useDispatch();
  const statusBars = useSelector(selectStatusBars);
	const id = props.id;
	const style = statusBars[id];
  const state = useSelector(selectContextMenus)[`status_bar_${id}`];

	if (!state.enabled) {
		return null;
	}

	return (
		<ContextMenu
			id={`status_bar_${id}`}
			position={id === "top" ? "below" : "above" }
			x={state.x}
			y={state.y}
		>

			<OptBox label={`${id} Status Bar`} className="status-bar-menu" width={350}>
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

				<div>
					Widgets
					<Button text={"+"} callback={() => addWidget({ bar: id, pos: "left"})} style={{marginLeft: "8px"}}/>
					<Button text={"-"} callback={() => delWidget({ bar: id, pos: "left"})} />
					―
					<Button text={"+"} callback={() => addWidget({ bar: id, pos: "centre"})} />
					<Button text={"-"} callback={() => delWidget({ bar: id, pos: "centre"})} />
					―
					<Button text={"+"} callback={() => addWidget({ bar: id, pos: "right"})} />
					<Button text={"-"} callback={() => delWidget({ bar: id, pos: "right"})} />
				</div>

			</OptBox>

		</ContextMenu>
	);
};
