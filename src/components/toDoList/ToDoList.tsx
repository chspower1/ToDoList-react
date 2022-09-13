import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import { toDosSelector, categoryState, Categories } from "../atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import NavBar from "../NavBar";
import styled from "styled-components";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;
const ToDos = styled.div`
    display: grid;
    grid-template-columns: repeat(5, auto);
    height: 80%;
    margin-top: 50px;
    transition: all 0.4s ease;
`;
const Title = styled.h1`
    font-size: 28px;
    margin: 60px 0px;
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
                        <ToDo key={toDo.id} index={index} {...toDo} />
                    ))}
            </ToDos>
        </Container>
    );
}
