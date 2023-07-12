import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/counterSlice';
import { todosApi } from './apis';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(todosApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
