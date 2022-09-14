import React from "react";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import ToDoCard from "../SelecMode/ToDoCard";
import { useRecoilValue } from "recoil";
import { Categories, dividedToDos, IToDo, IToDoState } from "../../../atoms";
import CategoryBoard from "./CategoryBoard";
import styled from "styled-components";
import { Container, Title } from "../ToDoList";

export default function DragMode() {
    const toDos = useRecoilValue(dividedToDos);
    const onDragEnd = () => {};
    return (
        <div>
            <DragDropContext onDragEnd={onDragEnd}>
                {Object.keys(toDos).map((boardId: string) => (
                    <CategoryBoard boardId={boardId} toDos={toDos[boardId]} />
                ))}
            </DragDropContext>
        </div>
    );
}
