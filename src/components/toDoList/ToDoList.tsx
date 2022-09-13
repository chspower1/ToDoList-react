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
`;

export default function ToDoList() {
    const toDos = useRecoilValue(toDosSelector);

    return (
        <Container>
            <CreateToDo />
            <ToDos>
                {toDos?.map((toDo: any) => (
                    <ToDo key={toDo.id} {...toDo} />
                ))}
            </ToDos>
        </Container>
    );
}
