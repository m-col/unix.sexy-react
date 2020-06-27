import React from 'react';

import Tabs from 'components/tabs/panel';

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


export function Top() {
	return (
		<div id="Top">
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
		</div>
	);
}
