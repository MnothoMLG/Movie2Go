import { combineReducers } from '@reduxjs/toolkit';
import { loadingReducer } from './loading/reducer';
import { moviesReducer } from './movies/reducer';
import { alertReducer } from './alert/reducer';

export const reducers = combineReducers({
  loadingReducer,
  alertReducer,
  moviesReducer,
});

export type AppState = ReturnType<typeof reducers>;
