import { createStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

import backgroundReducer from 'features/background/slice';
import windowReducer from 'features/windows/slice';
import windowContentReducer from 'features/window_content/slice';
import tabReducer from 'features/tabs/slice';
import shadowReducer from 'features/shadows/slice';
import borderReducer from 'features/borders/slice';
import { RESET } from 'features/reset/slice';


const reducer = combineReducers({
	background: backgroundReducer,
	windows: windowReducer,
	windowContent: windowContentReducer,
	tab: tabReducer,
	shadows: shadowReducer,
	borders: borderReducer,
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
