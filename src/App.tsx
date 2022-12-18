import React, { useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import TasksContainer from "./components/TasksPart/TasksContainer";
import { useAppDispatch } from "./hooks/reduxHooks";
import { todoSlice } from "./store/todosReducer";


const Container = styled.div`
  & {
    padding: 0;
    width: 50%;
    margin: 50px auto 0 auto;
    border-radius: 5px;
    border: 1px solid #bababa;
    overflow: hidden;
  }
  
  @media (max-width: 600px) {
    width: 80%;
  }
`;

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { readTodosFromStorage } = todoSlice.actions;

  useEffect(() => {
    dispatch(readTodosFromStorage())
  }, []);

  return (
    <Container>
      <Header />
      <TasksContainer />
    </Container>
  );
};

export default App;
