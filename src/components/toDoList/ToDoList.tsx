import CreateToDo from "./CreateToDo";
import ToDoCard from "./ToDoCard";
import { toDosSelector, categoryState, Categories } from "../atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import NavBar from "../NavBar";
import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    height: auto;
    align-items: center;
`;
const ToDos = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 50px;
    padding: 20px;
    margin-top: 30px;
    transition: all 0.4s ease;
`;
const Title = styled.h1`
    font-size: 28px;
    margin-top: 60px;
`;

export default function ToDoList() {
    const toDos = useRecoilValue(toDosSelector);

    return (
        <Container>
            <Title>To Do List</Title>
            <CreateToDo />
            <ToDos>
                {toDos
                    ?.slice(0)
                    .reverse()
                    .map((toDo, index) => (
                        <ToDoCard key={toDo.id} index={index} {...toDo} />
                    ))}
            </ToDos>
        </Container>
    );
}
