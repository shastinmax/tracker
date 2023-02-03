import { configureStore } from '@reduxjs/toolkit';
import showHeader from './slices/showHeaderSlice';

export const store = configureStore({
  reducer: {
    showHeader,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
