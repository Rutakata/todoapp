import React, { useState } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { todoSlice } from "../../store/todosReducer";


const Container = styled.div`
    height: 30px;
`

const Input = styled.input`
    border: 1px solid #bababa;
    border-radius: 5px 0 0 5px;
    box-sizing: border-box;
    height: 100%;
    padding-left: 15px;
    width: 80%
`

const Button = styled.button`
    background-color: #1a7edb;
    border: none;
    width: 20%;
    height: 100%;
    color: #fff;
    border-radius: 0 5px 5px 0;
`

const AddTaskBar: React.FC = () => {
    const [newTodoValue, setNewTodoValue] = useState<string>("");
    const dispatch = useAppDispatch();
    const { createTodo } = todoSlice.actions;
    const input = React.useRef<HTMLInputElement>(null);

    const handleInputChange = () => {
        const current = input.current;
        setNewTodoValue(current?current.value: "");
    };

    const handleSubmitButton = () => {
        dispatch(createTodo(newTodoValue));
        setNewTodoValue("");
    };

    return (
        <Container>
            <Input type="text" value={newTodoValue} ref={input} onChange={handleInputChange} placeholder="Enter todo here" />
            <Button onClick={handleSubmitButton}>Submit</Button>
        </Container>
    )
};

export default AddTaskBar;