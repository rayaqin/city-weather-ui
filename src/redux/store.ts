import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import selectedCapitalsReducer from './selectedCapitalsSlice';

export const store = configureStore({
  // passing an object here will mash all reducers together using combineReducers
  reducer: {
    selectedCapitals: selectedCapitalsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
