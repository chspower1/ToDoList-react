import React from "react";
import SelectCategory from "./SelectCategory";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { toDosSelector } from "./../../../atoms";
import ToDoCard from "./ToDoCard";
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
export default function SelectMode() {
    const toDos = useRecoilValue(toDosSelector);
    return (
        <div>
            <SelectCategory />
            <ToDos>
                {toDos
                    ?.slice(0)
                    .reverse()
                    .map((toDo, index) => (
                        <ToDoCard key={toDo.id} index={index} {...toDo} />
                    ))}
            </ToDos>
        </div>
    );
}
