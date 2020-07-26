import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Color from 'components/color';
import ContextMenu from 'components/context_menu';
import OptBox from 'components/optbox';
import Option from 'components/option';
import Switch from 'components/switch';

import { selectContextMenus } from 'features/context_menus/slice';
import {
	toggle,
  setPosition,
	setColor,
	setTextColor,
	setColorFocus,
	setTextColorFocus,
	setWidth,
  selectTitleBars,
} from './slice';


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
					Color
					<Color value={style.color} callback={setColor} />
					Text
					<Color value={style.textColor} callback={setTextColor} />
				</div>

				<div>
					Focussed
					<Color value={style.colorFocus} callback={setColorFocus} />

					Text
					<Color value={style.textColorFocus} callback={setTextColorFocus} />
				</div>

			</OptBox>

		</ContextMenu>
	);
}
