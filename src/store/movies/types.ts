import { IMovie } from '@constants/types';

export interface MoviesState {
  all_movies: Array<IMovie>;
  favourites: Array<IMovie>;
}
