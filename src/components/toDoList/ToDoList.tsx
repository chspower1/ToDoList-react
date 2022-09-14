import CreateToDo from "./CreateToDo";
import ToDoCard from "./SelecMode/ToDoCard";

import styled from "styled-components";
import SelectMode from "./SelecMode/SelectMode";
import DragMode from "./DragMode/DragMode";
import { useState } from "react";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    height: auto;
    align-items: center;
    padding: 0px 50px;
`;

export const Title = styled.h1`
    font-size: 28px;
    margin-top: 60px;
`;

export default function ToDoList() {
    const [mode, setMode] = useState(true);
    return (
        <Container>
            <button onClick={() => setMode((cur) => !cur)}>모드변경</button>
            <Title>To Do List</Title>
            <CreateToDo />
            {mode ? <SelectMode /> : <DragMode />}
        </Container>
    );
}
