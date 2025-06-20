import type { BlogModel } from "../../models/BlogModel";
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface blogsState {
    blogs: Array<BlogModel>
}

const initialState: blogsState = {
    blogs: []
}


const blogStateSlice = createSlice(
    {
        name: "blogs",
        initialState,
        reducers: {
            setBlogs: (state, action: PayloadAction<Array<BlogModel>>) => {
                state.blogs = action.payload
            }
        }
    }
)


export default blogStateSlice.reducer
export const { setBlogs } = blogStateSlice.actions