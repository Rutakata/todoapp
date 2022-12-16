import React from 'react';
import styled from 'styled-components';
import './App.css';
import TasksContainer from './components/TasksContainer';


const Container = styled.div`
  padding: 0;
  width: 50%;
  margin: 0 auto;
  border-radius: 10px;
`;

const Header = styled.h1`
  margin: 50px 0 0 0;
  height: 50px;
  background-color: #ececec;
  border: 1px solid #bababa;
  padding: 0 0 0 20px;
  font-size: 24px;
  color: #4b4b4b;
  border-radius: inherit;
`;

const App:React.FC = () => {
  return (
    <Container>
      <Header>ToDos 5</Header>
      <TasksContainer />
    </Container>
  );
}

export default App;
