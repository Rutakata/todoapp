import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../hooks/reduxHooks";
import { ITodo } from "../../store/todosReducer";
import TasksListItem from "./TaskListItem";



const Container = styled.div`
    & {
        display: flex;
        flex-direction: column;
        border: 1px solid #bababa;
        margin-top: 10px;
        border-radius: 5px;
        padding: 0;
    }
`


const TasksList = () => {
    const {todos} = useAppSelector(state => state.todoReducer);

    if (todos.length === 0) return <Container>No todos</Container>

    return (
        <Container>
            {todos.map((todo: ITodo, index: number) => (
                <TasksListItem todo={todo} id={index} key={todo.value + Math.random()}/>
            ))}
        </Container>
    )
}

export default TasksList;