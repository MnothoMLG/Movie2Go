import { AxiosResponse } from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';
import { client } from '../../api/api';
import {
  fetchMoviesRequest,
  fetchMoviesSuccess,
} from './actions';
import {
  EToastTypes,
  IMovieFetchPayload,
  IMovieFetchResponse,
} from '@constants/types';
import { showToast } from '@util/index';

export function* fetchAllMovies({
  payload: { query },
}: {
  payload: IMovieFetchPayload;
  type: string;
}) {
  try {
    const response: AxiosResponse<IMovieFetchResponse> = yield call(() =>
      client.get('', {
        params: { q: query },
      })
    );

    if (response.data.error_code === 200) {
      yield put(fetchMoviesSuccess({ all_movies: response.data.description }));
    }
  } catch (err) {
    console.log({ err });
    showToast({
      type: EToastTypes.ERROR,
      message: 'An error occurred fetching data',
    });
  }
}

export function* watchMoviesSagas() {
  yield takeLatest(fetchMoviesRequest.type, fetchAllMovies);
}
