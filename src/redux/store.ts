import { configureStore } from '@reduxjs/toolkit';
// import userReducer from './features/userSlice';
import addExpenseReducer from './features/addExpenseSlice';

export const store = configureStore({
  reducer: {
    wallet: addExpenseReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
