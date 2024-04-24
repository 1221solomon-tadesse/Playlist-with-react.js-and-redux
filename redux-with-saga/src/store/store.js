import { configureStore } from '@reduxjs/toolkit';
import songReducer from './songReducers';
import rootSaga from './saga';

const store = configureStore({
  reducer: songReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rootSaga),
});

export default store;
