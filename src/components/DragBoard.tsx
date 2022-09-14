import React from "react";
import { DragDropContext, Draggable, Droppable, DropResult } from "@hello-pangea/dnd";
import ToDoCard from "./toDoList/ToDoCard";
import { useRecoilState } from "recoil";
import { toDosSelector, toDoState } from "../atoms";
export default function DragBoard() {
    const [toDos, setToDos] = useRecoilState(toDoState);
    const onDragEnd = () => {};
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="1">
                {(magic, snapshot) => (
                    <Draggable draggableId="1" index={1}>
                        {(magic, snapshot) => toDos.map((toDo) => <ToDoCard {...toDo} />)}
                    </Draggable>
                )}
            </Droppable>
        </DragDropContext>
    );
}
