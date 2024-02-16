import { configureStore } from "@reduxjs/toolkit";
import todosReducer from '../features/todoSlice'

const store = configureStore({
    reducer: {
        todos:todosReducer,
    },
})

export default store;