import React from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import { useRecoilValue } from "recoil";
import { dividedToDos } from "../../../atoms";
import CategoryBoard from "./CategoryBoard";
import styled from "styled-components";

const DragContainer = styled.section`
    display: flex;
    width: 70vw;
`;

export default function DragMode() {
    const toDos = useRecoilValue(dividedToDos);
    const onDragEnd = () => {};
    return (
        <DragContainer>
            <DragDropContext onDragEnd={onDragEnd}>
                {Object.keys(toDos).map((boardId: string) => (
                    <CategoryBoard boardId={boardId} toDos={toDos[boardId]} />
                ))}
            </DragDropContext>
        </DragContainer>
    );
}
