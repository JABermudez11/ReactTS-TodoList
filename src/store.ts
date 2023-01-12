import { configureStore, createStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import counterReducer from '../src/features/counter/counterSlice'
import moviesReducer from '../src/features/movies/movieSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    movie: moviesReducer,
  },
})

// export const store = createStore(moviesReducer);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;
