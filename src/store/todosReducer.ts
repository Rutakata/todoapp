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
        },
        editTodo(state, action: PayloadAction<{id: number, value: string}>) {
            state.todos[action.payload.id].value = action.payload.value; 
        },
        deleteTodo(state, action: PayloadAction<number>) {
            if (action.payload !== 0 && action.payload !== state.todos.length-1) {
                state.todos = state.todos.filter((todo, index) => {
                    if (index !== action.payload) return todo
                })
            }else if (action.payload === state.todos.length-1) {
                state.todos.pop()
            }else if (action.payload === 0) {
                state.todos.shift()
            }
        }
    }
});

export default todoSlice.reducer;