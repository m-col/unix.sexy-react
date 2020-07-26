import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Color from 'components/color';
import ContextMenu from 'components/context_menu';
import OptBox from 'components/optbox';

import { selectContextMenus } from 'features/context_menus/slice';
import {
	setColor,
	setBackgroundColor,
	setPadding,
	selectWidgets ,
} from './slice';


export default function Menu(props) {
  const dispatch = useDispatch();
  const { enabled, x, y, details } = useSelector(selectContextMenus)["widget"];
  const widgets = useSelector(selectWidgets);

	if (!enabled) {
		return null;
	}

	const { bar, pos, id } = details;
	const style = widgets[bar][pos][id];

	return (
		<ContextMenu
			id="widget"
			position="below"
			x={x}
			y={y}
		>

			<OptBox label="widget">
				<div>
					Color
					<Color
						value={style.color}
						callback={color => setColor({...details, color: color})} 
					/>
				</div>

				<div>
					Background
					<Color
						value={style.backgroundColor}
						callback={color => setBackgroundColor({...details, color: color})} 
					/>
				</div>

				<div>
					Padding
					<input value={style.padding} type="number" min="0"
						onChange={e => dispatch(setPadding({...details, value: e.target.value}))}
					/>
				</div>

			</OptBox>

		</ContextMenu>
	);
};
