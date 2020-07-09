import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store, persistor } from 'store';
import { PersistGate } from 'redux-persist/integration/react';
import * as serviceWorker from 'serviceWorker';

import Desktop from 'features/desktop';
import 'index.css';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Desktop />
			</PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
