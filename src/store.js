import { configureStore } from '@reduxjs/toolkit';
import backgroundReducer from './features/background';

export default configureStore({
  reducer: {
    background: backgroundReducer,
  },
});
