import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createFilter from 'redux-persist-transform-filter';
import { persistStore, persistReducer } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import { reducers } from './root.reducer';
import sagas from './root.saga';

//persist only the onBoarded auth reducer field
const saveSubsetFilter = createFilter('moviesReducer', ['favourites']);

const config = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['moviesReducer'],
  debug: true,
};

const persistedReducers = persistReducer(config, reducers);
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducers,
  devTools: true,
  middleware: [sagaMiddleware],
});

const persistor = persistStore(store);
sagaMiddleware.run(sagas);

// persistor.purge();

export { persistor, store };
