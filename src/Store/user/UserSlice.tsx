import { createSlice } from '@reduxjs/toolkit';
import { UserState } from '../../Types';



const initialState : UserState = {
    token: null,
    user: null,
    dark:false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setDark: (state, action) => {
            state.dark = action.payload;
        },
        clearUser: (state) => {
            state.user = null;
        },
    },
});


export const { setUser, setToken, setDark, clearUser } = userSlice.actions;

export default userSlice.reducer;


