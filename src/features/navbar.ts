import { createSlice } from '@reduxjs/toolkit';


const initialState: navbarState = {
    authenticated: false,
}

const navbarSlice = createSlice({
    name: "navbarAuthentication",
    initialState,
    reducers: {
       Authenticated: (state) => {
            state.authenticated = true;
        },
        notAuthenticated: (state) => {
            state.authenticated = false;
        }
    }
})

export const { Authenticated, notAuthenticated } = navbarSlice.actions;

export default navbarSlice;