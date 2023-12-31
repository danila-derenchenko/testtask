import { createSlice } from '@reduxjs/toolkit'

const initualState = false

export const isloginSlice = createSlice({
    name: 'islogin',
    initialState: initualState,
    reducers: {
        login: (state) => {
            return state = true
        },
        logout: (state) => {
            return state = false
        }
    }
})

export const { login, logout } = isloginSlice.actions
export default isloginSlice.reducer