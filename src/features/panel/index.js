import React from 'react';
import { Rnd } from 'react-rnd';
import { useDispatch, useSelector } from 'react-redux';

import Tabs from 'components/tabs';
import { dragPanel, selectPanel } from './slice';
import { selectShadowStyleCSS } from 'features/shadows/slice';
import './index.css';


// Panel contents
import { AlphaCtl } from 'features/alpha/panel';
import { BackgroundCtl } from 'features/background/panel';
import { ResetCtl } from 'features/reset/panel';
import { WindowCtl } from 'features/windows/panel';
import { WindowContentCtl } from 'features/window_content/panel';
import { TitleBarCtl } from 'features/title_bars/panel';
import { ShadowCtl } from 'features/shadows/panel';
import { BorderCtl } from 'features/borders/panel';
import { StatusBarCtl } from 'features/status_bars/panel';
import { LauncherCtl } from 'features/launchers/panel';
import { NotificationCtl } from 'features/notifications/panel';
import { MiscCtl } from 'features/misc/panel';


export function Panel() {
  const dispatch = useDispatch();
  const position = useSelector(selectPanel);

	const style = {
		...useSelector(selectShadowStyleCSS),
		backgroundColor: "#ffffff",
	};

	return (
		<Rnd
			bounds="parent"
			id="Panel"
			cancel=".tab-content"
			enableResizing={false}
			style={style}
			position={{
				x: position.x,
				y: position.y
			}}
			size={{
				width: "520px",  height: "204px"
			}}
			onDragStop={
				(e, d) => {dispatch(dragPanel({x: d.x, y: d.y}))}
			}
		>
			<Tabs>

				<div label="Settings">
					<ResetCtl />
					<BackgroundCtl />
				</div>

				<div label="Windows">
					<WindowCtl />
					<TitleBarCtl />
					<WindowContentCtl />
					<ShadowCtl />
					<BorderCtl />
					<AlphaCtl />
				</div>

				<div label="Status bars">
					<StatusBarCtl />
				</div>

				<div label="Launchers">
					<LauncherCtl />
				</div>

				<div label="Notification">
					<NotificationCtl />
				</div>

				<div label="Misc">
					<MiscCtl />
				</div>

			</Tabs>
		</Rnd>
	);
}

export default Panel;
