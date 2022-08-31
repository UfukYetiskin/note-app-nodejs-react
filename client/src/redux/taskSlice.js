import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name : "counter",
    initialState : {
        count : 0,
    },
    reducers : {
        increase: (state) => {
            state.count += 1;
        },
    },
});

export const {increase} = taskSlice.actions;
export default taskSlice.reducer;