import { createReducer } from '@reduxjs/toolkit';
import {
  addToFavourites,
  fetchMoviesSuccess,
  removeFromFavourites,
} from './actions';
import { MoviesState } from './types';

const INITIAL_STATE: MoviesState = {
  all_movies: [],
  favourites: [],
};

export const moviesReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(fetchMoviesSuccess, (state, action) => {
      if (action.payload) {
        const { payload } = action;
        return { ...state, ...payload };
      }
    })
    .addCase(addToFavourites, (state, action) => {
      if (action.payload) {
        const { payload } = action;

        const { movie } = payload;
        return {
          ...state,
          favourites: [...state.favourites, movie],
        };
      }
    })
    .addCase(removeFromFavourites, (state, action) => {
      if (action.payload) {
        const { payload } = action;

        const { movie } = payload;
        return {
          ...state,
          favourites: [...state.favourites].filter(
            (mv) => mv['#TITLE'] !== movie['#TITLE']
          ),
        };
      }
    });
});
