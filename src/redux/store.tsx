import { configureStore } from '@reduxjs/toolkit';
import userSlice from './feature/user/userSlice';
import { authApi } from './api/authAciton';
import { publicApi } from './api/publicApi';

const store = configureStore({
  reducer: {
    auth: userSlice,
    [authApi.reducerPath]: authApi.reducer,
    [publicApi.reducerPath]: publicApi.reducer
  },
  middleware : (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(authApi.middleware , publicApi.middleware),

})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
