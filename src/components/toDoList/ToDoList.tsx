import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import { toDosSelector, categoryState, Categories } from "../atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import NavBar from "../NavBar";
import styled from "styled-components";

const Container = styled.section`
    display: flex;
`;

export default function ToDoList() {
    const toDos = useRecoilValue(toDosSelector);

    return (
        <Container>
            <CreateToDo />
            {toDos.map((toDo) => (
                <ToDo key={toDo.id} {...toDo} />
            ))}
        </Container>
    );
}
