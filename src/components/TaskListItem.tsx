import React from "react";
import styled from "styled-components";
import { BiEdit } from "react-icons/bi";
import { CgTrash } from "react-icons/cg";
import { ITodo, todoSlice } from "../store/todosReducer";
import { useAppDispatch } from "../hooks/reduxHooks";



interface Props {
    todo: ITodo,
    id: number
}

const Container = styled.li`
    padding: 5px 0;
    text-decoration: none;
    display: flex;
    font-size: 16px;
    height: 70px;
    justify-content: space-between;
`
const EditButton = styled.button`
    width: 40px;
    height: 25px;
    background-color: #28d130;
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
`
const DeleteButton = styled.button`
    width: 40px;
    height: 25px;
    background-color: #d12828;
    border: none;
    border-radius: 5px;
`

const Checkbox = styled.input`
    width: 16px;
    height: 16px;
`
const FlexContainer = styled.div`
    display: inline-block;
`


const TasksListItem = (props: Props) => {
    const dispatch = useAppDispatch();
    const { finishTodo } = todoSlice.actions;

    return (
        <Container>
            <FlexContainer>
                <Checkbox type='checkbox' checked={props.todo.finished} onClick={() => dispatch(finishTodo(props.id))}/>
                {props.todo.value} 
            </FlexContainer>
            <FlexContainer>
                <EditButton style={{color: 'white'}}><BiEdit size={20}/></EditButton>
                <DeleteButton style={{color: 'white'}}><CgTrash size={20}/></DeleteButton>
            </FlexContainer>
        </Container>
    )
}

export default TasksListItem;