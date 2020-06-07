import React from 'react';

import Tabs from 'features/tabs/panel';

import { BackgroundCtl, WallpaperCtl } from 'features/background/panel';
import { LauncherCtl } from 'features/launchers/panel';
import { NotificationCtl } from 'features/notifications/panel';
import { WindowCtl } from 'features/windows/panel';
import { MiscCtl } from 'features/misc/panel';
import { StatusBarCtl } from 'features/status_bars/panel';
import { ResetCtl } from 'features/reset/panel';


export function Top() {
	return (
		<div id="Top">
			<Tabs>

				<div label="Settings">
					<BackgroundCtl />
					<WallpaperCtl />
					<ResetCtl />
				</div>

				<div label="Windows">
					<WindowCtl />
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
