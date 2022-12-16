import React, { useState } from "react";
import styled from "styled-components";


const Container = styled.div`
    height: 30px;
`

const Input = styled.input`
    border: 1px solid #bababa;
    border-radius: 5px 0 0 5px;
    box-sizing: border-box;
    height: 100%;
    padding-left: 10px;
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
    const [newTask, setNewTask] = useState<string>("");

    return (
        <Container>
            <Input type="text" value={newTask} placeholder="Enter todo here"/>
            <Button>Submit</Button>
        </Container>
    )
};

export default AddTaskBar;