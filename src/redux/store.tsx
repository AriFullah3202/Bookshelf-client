import { configureStore } from '@reduxjs/toolkit';
import userSlice from './feature/user/userSlice';
import { authApi } from './feature/auth/authAciton';

const store = configureStore({
  reducer: {
    auth: userSlice,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware : (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(authApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
