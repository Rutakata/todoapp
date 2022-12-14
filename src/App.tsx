import React from 'react';
import styled from 'styled-components';
import './App.css';


const Container = styled.div`
  padding: 0;
  width: 70%;
  margin: 0 auto;
`;

const Header = styled.h1`
  margin: 50px 0 0 0;
  height: 50px;
  background-color: #ececec;
  border: 1px solid #bababa;
  padding: 0 0 0 20px;
  font-size: 24px;
  color: #4b4b4b;
`;

const App:React.FC = () => {
  return (
    <Container>
      <Header>ToDos 5</Header>
    </Container>
  );
}

export default App;
