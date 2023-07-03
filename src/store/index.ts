import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import formReducer from './slices/form.slice';
import { formApi } from './api/formApi';

export const store = configureStore({
  reducer: {
    formReducer,
    [formApi.reducerPath]: formApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(formApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
