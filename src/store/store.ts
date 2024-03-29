import { configureStore } from '@reduxjs/toolkit'
import counterSlice  from '../features/counter/counterslice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import modalSlice from '../features/modal'
import navbarSlice from '../features/navbar'


export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        modal: modalSlice.reducer,
        navbar: navbarSlice.reducer,
    }
})

// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState,...etc}
export type AppDispatch = typeof store.dispatch

//Use throughout your app instead of plain 'useDispatch' and 'useSelector'
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector