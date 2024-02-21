import { createSlice } from '@reduxjs/toolkit';


const initialState: modalState = {
    open: false,
    dimmer: "",
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.open = true;
            state.dimmer = action.payload;
                
        },
        closeModal: (state) => {
            state.open = false;
        }
    }
})

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice;