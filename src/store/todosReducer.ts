import { createSlice, PayloadAction } from "@reduxjs/toolkit"


export interface ITodo {
    finished: boolean,
    value: string
}

interface State {
    todos: ITodo[],
    newTodoValue: string
}

const initialState: State = {
    todos: [],
    newTodoValue: ""
}



export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        createTodo(state, action: PayloadAction<string>) {
            state.todos.push({finished: false, value: action.payload});
        },
        finishTodo(state, action: PayloadAction<number>) {
            state.todos[action.payload].finished = true;
        }
    }
});

export default todoSlice.reducer;