import React from "react";
import { Container } from "./toDoList/ToDoList";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeContainer = styled(Container)`
    background-image: url("../assets/img/home.jpg");
    justify-content: center;
    align-items: center;
    font-size: 60px;
`;
const Btn = styled.button`
    margin-top: 20px;
    font-size: 26px;
`;

export default function Home() {
    return (
        <HomeContainer>
            해야 할 일을 정리해보세요!
            <Link to="/todolist">
                <Btn>시작하기</Btn>
            </Link>
        </HomeContainer>
    );
}
