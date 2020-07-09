import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	toggle,
  setPosition,
	setColour,
	setTextColour,
	setColourFocus,
	setTextColourFocus,
	setWidth,
  selectTitleBars,
} from './slice';
import { selectContextMenus } from 'features/context_menus/slice';
import Colour from 'components/colour';
import OptBox from 'components/optbox';
import Option from 'components/option';
import Switch from 'components/switch';
import ContextMenu from 'components/context_menu';


export default function Menu(props) {
  const dispatch = useDispatch();
  const style = useSelector(selectTitleBars);
  const state = useSelector(selectContextMenus).title_bar;

	if (!state.enabled) {
		return null;
	}

	return (
		<ContextMenu
			id={"title_bar"}
			position={"below"}
			x={state.x}
			y={state.y}
		>

			<OptBox className="titleBarCtl" label="Title Bars" width="360px">

				<div>
					Enabled
					<Switch value={style.enabled} callback={toggle} />

					Width
					<input value={style.width} type="number" min="0"
						onChange={e => dispatch(setWidth(e.target.value))}
					/>
				</div>

				<div>
					Position
					<Option
						value={style.position}
						options={[
							{key: "N", callback: () => dispatch(setPosition("N"))},
							{key: "E", callback: () => dispatch(setPosition("E"))},
							{key: "S", callback: () => dispatch(setPosition("S"))},
							{key: "W", callback: () => dispatch(setPosition("W"))},
						]}
					/>
				</div>

				<div>
					Colour
					<Colour value={style.colour} callback={setColour} />
					Text
					<Colour value={style.textColour} callback={setTextColour} />
				</div>

				<div>
					Focussed
					<Colour value={style.colourFocus} callback={setColourFocus} />

					Text
					<Colour value={style.textColourFocus} callback={setTextColourFocus} />
				</div>

			</OptBox>

		</ContextMenu>
	);
}
