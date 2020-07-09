import React from 'react';
import { Rnd } from 'react-rnd';
import { useDispatch, useSelector } from 'react-redux';

import Tabs from 'components/tabs';
import { dragPanel, selectPanel } from './slice';
import { selectShadowStyleCSS } from 'features/shadows/slice';
import './index.css';


// Panel contents
import { About } from 'features/about/panel';
import { AlphaCtl } from 'features/alpha/panel';
import { BackgroundCtl } from 'features/background/panel';
import { ResetCtl } from 'features/reset/panel';
import { WindowCtl } from 'features/windows/panel';
import { WindowContentCtl } from 'features/window_content/panel';
import { ShadowCtl } from 'features/shadows/panel';
import { BorderCtl } from 'features/borders/panel';
import { StatusBarCtl } from 'features/status_bars/panel';
import { LauncherCtl } from 'features/launchers/panel';
import { NotificationCtl } from 'features/notifications/panel';


export function Panel() {
  const dispatch = useDispatch();
  const position = useSelector(selectPanel);

	const style = {
		...useSelector(selectShadowStyleCSS),
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
				width: "522px",  height: "204px"
			}}
			onDragStop={
				(e, d) => {dispatch(dragPanel({x: d.x, y: d.y}))}
			}
		>
			<Tabs>

				<div label="About">
					<About />
					<ResetCtl />
				</div>

				<div label="Settings">
					<BackgroundCtl />
					<StatusBarCtl />
					<ShadowCtl />
				</div>

				<div label="Windows">
					<WindowCtl />
					<WindowContentCtl />
					<BorderCtl />
					<AlphaCtl />
				</div>

				<div label="Launchers">
					<LauncherCtl />
				</div>

				<div label="Notification">
					<NotificationCtl />
				</div>

			</Tabs>
		</Rnd>
	);
}

export default Panel;
