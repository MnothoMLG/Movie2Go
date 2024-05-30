export interface ICallBacks {
  onSuccess?: (value?: any) => void;
  onFailure?: () => void;
  onComplete?: () => void;
  onPaymentCancellation?: (id?: number) => void;
  retry?: () => void;
}

export interface IMovie {
  '#TITLE': string;
  '#YEAR': number;
  '#IMDB_ID': string;
  '#RANK': number;
  '#ACTORS': string;
  '#AKA': string;
  '#IMDB_URL': string;
  '#IMDB_IV': string;
  '#IMG_POSTER': string;
  photo_width: number;
  photo_height: number;
}

export interface IMovieFetchPayload {
  query?: string;
}

export interface IMovieGenericPayload {
  movie: IMovie;
}
export interface IMovieFetchResponse {
  ok: boolean;
  description: IMovie[];
  error_code: number;
}

export interface IAction<T> {
  type: string;
  payload: T;
}

export enum ALERTTYPES {
  CONFIRM = 'confirm',
  ERROR = 'error',
  INFO = 'info',
}

export enum EToastTypes {
  ERROR = 'error',
  SUCCESS = 'success',
}

export enum IPlatforms {
  ANDROID = 'android',
  IOS = 'ios',
  WEB = 'web',
}

export interface ToastConfig {
  type: EToastTypes;
  message: string;
  description?: string;
  topOffset?: number;
}
