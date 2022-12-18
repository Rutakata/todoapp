import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../hooks/reduxHooks";


const Head = styled.h1`
  margin: 0;
  height: 50px;
  background-color: #ececec;
  border-bottom: 1px solid #bababa;
  padding: 0 0 0 20px;
  font-size: 24px;
  color: #4b4b4b;
  line-height: 50px;
`;

const Header = () => {
    const { todos } = useAppSelector(state => state.todoReducer)

    return <Head>ToDos{`(${todos.length})`}</Head>
}

export default Header;