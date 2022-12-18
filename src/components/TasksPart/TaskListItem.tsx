import React, { useRef, useState } from "react";
import styled from "styled-components";
import { BiEdit } from "react-icons/bi";
import { CgTrash } from "react-icons/cg";
import { TiTickOutline } from "react-icons/ti";
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

const Button = styled.button`
    width: 45px;
    height: 30px;
    border: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const EditButton = styled(Button)`
    background-color: #28d130;
`

const DeleteButton = styled(Button)`
    background-color: #d12828;
`

const Checkbox = styled.input`
    width: 15px;
    height: 15px;
    margin: 0;
    padding: 0;
`
const FlexContainer = styled.div`
    display: flex;
`

const TodoInput = styled.input`
    border-radius: 2px;
    border: 1px solid #bababa;
    height: 20px;
    width: 60%;
    padding-left: 5px;
    font-size: 14px;
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
            <FlexContainer style={{width: "80%", gap: "5px"}}>
                <Checkbox type='checkbox' checked={props.todo.finished} onClick={() => dispatch(finishTodo(props.id))}/>
                
                { editMode? 
                    <TodoInput type="text" value={newTodoValue} ref={input} onChange={handleInputChange}/> 
                    : props.todo.value }
            </FlexContainer>

            <FlexContainer style={{width: "15%", gap: "10px"}}>
                <EditButton style={{color: 'white'}} onClick={() => handleEditButton(props.id, newTodoValue)}>
                    { editMode ? <TiTickOutline size={20} /> : <BiEdit size={20}/> }
                </EditButton>

                <DeleteButton style={{color: 'white'}} onClick={() => dispatch(deleteTodo(props.id))} disabled={editMode}>
                    <CgTrash size={20}/>
                </DeleteButton>
            </FlexContainer>
        </Container>
    )
}

export default TasksListItem;