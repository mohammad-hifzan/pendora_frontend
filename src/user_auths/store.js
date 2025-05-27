import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authenticationSlice';
import mangaReducer from '../mangaReducers/mangas';
import { companyReducer } from '../company/companySlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    manga: mangaReducer,
    company: companyReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
