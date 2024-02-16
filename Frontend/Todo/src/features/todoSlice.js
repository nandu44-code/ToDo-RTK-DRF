import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await axios.get('http://localhost:8000/todo/todos');
    return response.data;
});

export const addTodo = createAsyncThunk('todos/addTodo', async todo => {
    const response = await axios.post('http://localhost:8000/todo/todos/', todo);
    return response.data
});

const todoSlice = createSlice({
    name: 'todos',
    initialState:{
        items: [],
        status: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addTodo.fulfilled, (state, action) => {
                state.items.push(action.payload);
            });
        },
});

export default todoSlice.reducer