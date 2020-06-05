import { createStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

import { RESET } from './features/reset';
import backgroundReducer from './features/background/slice';
import windowReducer from './features/windows/slice';


const reducer = combineReducers({
    background: backgroundReducer,
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
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
