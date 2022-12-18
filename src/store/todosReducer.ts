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
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        finishTodo(state, action: PayloadAction<number>) {
            state.todos[action.payload].finished = true;
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        editTodo(state, action: PayloadAction<{id: number, value: string}>) {
            state.todos[action.payload.id].value = action.payload.value; 
            localStorage.setItem('todos', JSON.stringify(state.todos));
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
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        readTodosFromStorage(state) {
            let storageTodos:string|null = localStorage.getItem("todos");
            if (typeof storageTodos === "string") {
                state.todos = JSON.parse(storageTodos);
            }
            
        }
    }
});

export default todoSlice.reducer;