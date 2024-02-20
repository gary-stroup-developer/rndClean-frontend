import { createSlice } from '@reduxjs/toolkit'

type State = {
    data: number
}

const initialState: State = {
    data: 21
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.data += 1
        },
        decrement: (state) => {
            state.data -= 1
        },
        incrementByAmount: (state, action) => {
            state.data += action.payload
        },
    },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions



export default counterSlice
