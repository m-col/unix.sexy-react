import React from 'react';
import { Corner } from 'panels/corner.js';
import { Top } from 'panels/top.js';
import { Left } from 'panels/left.js';
import { Desktop } from 'panels/desktop.js';


function App() {
	return (
		<div id="App">
			<div id="TopRow">
				<Corner />
				<Top />
			</div>
			<div>
				<Left />
				<Desktop />
			</div>
    </div>
  );
}


export default App;
