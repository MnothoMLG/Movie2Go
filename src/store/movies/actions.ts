import {
  IMovie,
  IMovieFetchPayload,
  IMovieGenericPayload,
} from '@constants/types';
import { createAction } from '@reduxjs/toolkit';

export const FETCH_MOVIES_LOADING_KEY = '@MOVIES/GET_MOVIES';
export const fetchMoviesRequest = createAction<IMovieFetchPayload>(
  '@MOVIES/GET_MOVIES_API_REQUEST'
);

export const fetchMoviesSuccess = createAction<{
  all_movies: IMovie[];
}>('@MOVIES/GET_MOVIES_API_SUCCESS');
export const fetchMoviesError = createAction<{
  error: any;
}>('@MOVIES/GET_MOVIES_API_ERROR');

export const addToFavourites =
  createAction<IMovieGenericPayload>('@MOVIES/LIKE_MOVIE');

export const removeFromFavourites = createAction<IMovieGenericPayload>(
  '@MOVIES/DISLIKE_MOVIE'
);
