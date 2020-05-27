import React from 'react';
import Corner from './panels/corner';
import Top from './panels/top';
import Left from './panels/left';
import Desktop from './panels/desktop';


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
