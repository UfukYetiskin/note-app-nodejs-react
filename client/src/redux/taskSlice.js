import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {axios} from "axios";


export const fetchTaskThunk = createAsyncThunk("tasks/getTasks", async () => {
    const res = await axios.get("http://localhost:5000/posts/")
    return res.json();
})
export const postDataThunk = createAsyncThunk("tasks/postData", async (data) => {
    try {
        const res = await axios.post("http://localhost:5000/posts/", data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
})
const taskSlice = createSlice({
    name : "tasks",
    initialState : {
        items : [
            {
                id : "12ajhsdasda1123",
                title : "Default Title",
                text  :"Default Text",
            },
        ],
        count : 0,
        status : "idle"
    },
    reducers : {
        increase: (state) => {
            state.count += 1;
        },
        addNote  :(state, action) => {
            state.items.push(action.payload)
        }
    },
    extraReducers : {
        [fetchTaskThunk.pending] : (state, action) => {
            state.status = "loading"
        },
        [fetchTaskThunk.fulfilled] : (state, action) => {
            state.status = "success"
            state.items = [...state.items, ...action.payload]
        },
        [fetchTaskThunk.rejected] : (state, action) => {
            state.status = "failed"
        },
    }
});

export const {increase, addNote} = taskSlice.actions;
export default taskSlice.reducer;