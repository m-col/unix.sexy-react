import { createStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

import alphaReducer from 'features/alpha/slice';
import backgroundReducer from 'features/background/slice';
import borderReducer from 'features/borders/slice';
import contextMenuReducer from 'features/context_menus/slice';
import focusReducer from 'components/window/slice';
import panelReducer from 'features/panel/slice';
import shadowReducer from 'features/shadows/slice';
import statusBarReducer from 'features/status_bars/slice';
import tabReducer from 'components/tabs/slice';
import titleBarReducer from 'features/title_bars/slice';
import windowContentReducer from 'features/window_content/slice';
import windowReducer from 'features/windows/slice';
import { RESET } from 'features/reset/slice';


const reducer = combineReducers({
	alpha: alphaReducer,
	background: backgroundReducer,
	borders: borderReducer,
	contextMenus: contextMenuReducer,
	focus: focusReducer,
	panel: panelReducer,
	shadows: shadowReducer,
	statusBars: statusBarReducer,
	tab: tabReducer,
	titleBars: titleBarReducer,
	windowContent: windowContentReducer,
	windows: windowReducer,
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
