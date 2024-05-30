import { all } from 'redux-saga/effects';
import { watchMoviesSagas } from './movies/sagas';

export default function* sagas() {
  yield all([watchMoviesSagas()]);
}
