import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default function persistReducerModule(reducers) {
  const persistedReducers = persistReducer({
    key: 'FAKE-STORE',
    storage,
    whitelist: ['cart']
  }, reducers);

  return persistedReducers;
}