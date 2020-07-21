import React from 'react';
import { useSelector } from 'react-redux';

import { selectWindowContent } from './slice';
import './index.css';


const sample
	= "#!/usr/bin/env bash\n"
	+ "\n"
	+ "HERE=$(dirname $(readlink -f $0))\n"
	+ "SCREEN_SIZE=${SCREEN_SIZE:-800x600}\n"
	+ "XDISPLAY=${XDISPLAY:-:1}\n"
	+ "LOG_LEVEL=${LOG_LEVEL:-INFO}\n"
	+ "APP=${APP:-xterm}\n"
	+ "if [[ -z $PYTHON ]]; then\n"
	+ "    PYTHON=python3\n"
	+ "fi\n"
	+ "\n"
	+ "Xephyr +extension RANDR -screen ${SCREEN_SIZE} ${XDISPLAY} -ac &\n"
	+ "XEPHYR_PID=$!\n"
	+ "(\n"
	+ "  sleep 1\n"
	+ "  env DISPLAY=${XDISPLAY} ${PYTHON} \"${HERE}\"/../bin/qtile -l ${LOG_LEVEL} $@ &\n"
	+ "  QTILE_PID=$!\n"
	+ "  env DISPLAY=${XDISPLAY} ${APP} &\n"
	+ "  wait $QTILE_PID\n"
	+ "  kill $XEPHYR_PID\n"
	+ ")\n"


export default function WindowContent(props) {
  const windowContent = useSelector(selectWindowContent);

	return (
		<pre style={windowContent}>
			<code className="lang-bash">
				{props.id === 0 ? sample : ""}
			</code>
		</pre>
	);
};
