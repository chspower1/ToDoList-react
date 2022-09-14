import CreateToDo from "./CreateToDo";
import ToDoCard from "./SelecMode/ToDoCard";
import { toDosSelector } from "../../atoms";
import { useRecoilValue } from "recoil";

import styled from "styled-components";
import SelectCategory from "./SelecMode/SelectCategory";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    height: auto;
    align-items: center;
    padding: 0px 50px;
`;
const ToDos = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 50px;
    margin-top: 30px;
    transition: all 0.4s ease;
`;
export const Title = styled.h1`
    font-size: 28px;
    margin-top: 60px;
`;

export default function ToDoList() {
    const toDos = useRecoilValue(toDosSelector);

    return (
        <BrowserRouter>
            <Container>
                <Title>To Do List</Title>
                <CreateToDo />
                <Routes>
                    <Route></Route>
                    <SelectCategory />
                    <ToDos>
                        {toDos
                            ?.slice(0)
                            .reverse()
                            .map((toDo, index) => (
                                <ToDoCard key={toDo.id} index={index} {...toDo} />
                            ))}
                    </ToDos>
                </Routes>
            </Container>
        </BrowserRouter>
    );
}
