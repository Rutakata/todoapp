import React from "react";
import styled from "styled-components";
import AddTaskBar from "./AddTaskBar";


const Container = styled.div`
  padding: 10px;
  border-radius: inherit;
`;


const TasksContainer: React.FC = () => {
    return (
        <Container>
            <AddTaskBar />
        </Container>
    )
};

export default TasksContainer