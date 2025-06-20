import { configureStore } from "@reduxjs/toolkit";
import blogSlice from './slices/blogSlice'
import contactSlice from './slices/contactSlice'

export const store = configureStore({
    reducer: {
        blog: blogSlice,
        contact: contactSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
