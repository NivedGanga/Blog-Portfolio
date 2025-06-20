import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
interface ContactState {
    isLoading: boolean,
    success: string | null
    error: string | null
}
const initialState: ContactState = {
    error: null,
    isLoading: false,
    success: null
}
const contactSlice = createSlice({
    initialState: initialState,
    name: 'Contact',
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setSuccess: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        }
    }
})

export default contactSlice.reducer
export const { setError, setLoading, setSuccess } = contactSlice.actions