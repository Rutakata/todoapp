import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../hooks/reduxHooks";
import { ITodo } from "../store/todosReducer";
import TasksListItem from "./TaskListItem";



const Container = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0 5px;
    border: 1px solid #bababa;
    margin-top: 10px;
    border-radius: 5px;
`


const TasksList = () => {
    const {todos} = useAppSelector(state => state.todoReducer);

    return (
        <Container>
            {todos.map((todo: ITodo, index: number) => (<TasksListItem todo={todo} id={index}/>))}
        </Container>
    )
}

export default TasksList;