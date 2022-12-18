import React, { useRef, useState } from "react";
import styled from "styled-components";
import { BiEdit } from "react-icons/bi";
import { CgTrash } from "react-icons/cg";
import { ITodo, todoSlice } from "../../store/todosReducer";
import { useAppDispatch } from "../../hooks/reduxHooks";



interface Props {
    todo: ITodo,
    id: number
}

const Container = styled.div`
    & {
        padding: 15px;
        text-decoration: none;
        display: flex;
        font-size: 16px;
        min-height: 50px;
        justify-content: space-between;
        align-items: center;
    }
    &:nth-of-type(odd) {
        background-color: rgba(0,0,0,.05);
    }
`
const EditButton = styled.button`
    width: 40px;
    height: 30px;
    background-color: #28d130;
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
    line-height: 25px;
`
const DeleteButton = styled.button`
    width: 40px;
    height: 30px;
    background-color: #d12828;
    border: none;
    border-radius: 5px;
`

const Checkbox = styled.input`
    width: 15px;
    height: 15px;
`
const FlexContainer = styled.div`
    display: inline-block;
`

const TodoInput = styled.input`
`


const TasksListItem = (props: Props) => {
    const dispatch = useAppDispatch();
    const { finishTodo, deleteTodo, editTodo } = todoSlice.actions;
    const [editMode, setEditMode] = useState<boolean>(false);
    const [newTodoValue, setNewTodoValue] = useState<string>(props.todo.value);
    const input = useRef<HTMLInputElement>(null);

    const handleInputChange = ():void => {
        const current = input.current;
        setNewTodoValue(current?current.value: "");
    }

    const handleEditButton = (id:number, value:string):void => {
        if (!editMode) {
            setEditMode(!editMode);
        }else {
            setEditMode(!editMode);
            dispatch(editTodo({id, value}));
        }
    }

    return (
        <Container>
            <FlexContainer style={{width: "80%"}}>
                <Checkbox type='checkbox' checked={props.todo.finished} onClick={() => dispatch(finishTodo(props.id))}/>
                { editMode? 
                    <TodoInput type="text" value={newTodoValue} ref={input} onChange={handleInputChange}/> 
                    : props.todo.value }
            </FlexContainer>
            <FlexContainer style={{width: "15%", display: "flex", gap: "10px"}}>
                <EditButton style={{color: 'white'}} onClick={() => handleEditButton(props.id, newTodoValue)}>
                    <BiEdit size={20}/>
                </EditButton>
                <DeleteButton style={{color: 'white'}} onClick={() => dispatch(deleteTodo(props.id))} disabled={editMode}>
                    <CgTrash size={20}/>
                </DeleteButton>
            </FlexContainer>
        </Container>
    )
}

export default TasksListItem;