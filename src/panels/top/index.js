import React from 'react';

import Tabs from '../../features/tabs/Tabs';
import SettingsTab from './settings.js';
import WindowsTab from './windows.js';
import StatusBarsTab from './status_bars.js';
import LaunchersTab from './launchers.js';
import NotificationsTab from './notifications.js';
import ExtrasTab from './extras.js';
import './index.css';


export default function Top() {
	return (
		<div id="Top">
			<Tabs>

				<div label="Settings">
					<SettingsTab />
				</div>

				<div label="Windows">
					<WindowsTab />
				</div>

				<div label="Status Bars">
					<StatusBarsTab />
				</div>

				<div label="Launchers">
					<LaunchersTab />
				</div>

				<div label="Notifications">
					<NotificationsTab />
				</div>

				<div label="Extras">
					<ExtrasTab />
				</div>

			</Tabs>
		</div>
	);
}
