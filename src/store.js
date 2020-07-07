import { createStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

import tabReducer from 'components/tabs/slice';
import panelReducer from 'features/panel/slice';

import backgroundReducer from 'features/background/slice';
import windowReducer from 'features/windows/slice';
import windowContentReducer from 'features/window_content/slice';
import alphaReducer from 'features/alpha/slice';
import shadowReducer from 'features/shadows/slice';
import borderReducer from 'features/borders/slice';
import titleBarReducer from 'features/title_bars/slice';
import statusBarReducer from 'features/status_bars/slice';
import { RESET } from 'features/reset/slice';


const reducer = combineReducers({
	tab: tabReducer,
	panel: panelReducer,
	background: backgroundReducer,
	windows: windowReducer,
	windowContent: windowContentReducer,
	alpha: alphaReducer,
	titleBars: titleBarReducer,
	shadows: shadowReducer,
	borders: borderReducer,
	statusBars: statusBarReducer,
})


const rootReducer = (state, action) => {
	if (action.type === RESET) {
		storage.removeItem('persist:root')
		state = undefined;
	}
	return reducer(state, action);
};

const persistConfig = {
	key: 'root',
	storage,
	whitelist: [],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
