import React from "react";
import styled from "styled-components";
import "./App.css";
import TasksContainer from "./components/TasksContainer";
import { useAppSelector } from "./hooks/reduxHooks";
import { todoSlice } from "./store/todosReducer";

const Container = styled.div`
  padding: 0;
  width: 50%;
  margin: 50px auto 0 auto;
  border-radius: 5px;
  border: 1px solid #bababa;
  overflow: hidden;
`;

const Header = styled.h1`
  margin: 0;
  height: 50px;
  background-color: #ececec;
  border-bottom: 1px solid #bababa;
  padding: 0 0 0 20px;
  font-size: 24px;
  color: #4b4b4b;
  line-height: 50px;
`;

const App: React.FC = () => {
  const { todos } = useAppSelector(state => state.todoReducer)

  return (
    <Container>
      <Header>ToDos{`(${todos.length})`}</Header>
      <TasksContainer />
    </Container>
  );
};

export default App;
