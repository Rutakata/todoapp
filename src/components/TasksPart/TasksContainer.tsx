import React from "react";
import styled from "styled-components";
import AddTaskBar from "./AddTaskBar";
import TasksList from "./TasksList";


const Container = styled.div`
  padding: 10px;
  border-radius: inherit;
`;


const TasksContainer: React.FC = () => {
    return (
        <Container>
            <AddTaskBar />
            <TasksList />
        </Container>
    )
};

export default TasksContainer