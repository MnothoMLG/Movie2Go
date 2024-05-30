import { AppState } from '../root.reducer';

export const getMoviesState = (app: AppState) => app.moviesReducer;
