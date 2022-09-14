import React from "react";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import ToDoCard from "./toDoList/ToDoCard";
import { useRecoilValue } from "recoil";
import { Categories, dividedToDos, IToDo } from "../atoms";
import { ToDos } from "./../atoms";

interface BoardProps {
    boardId: string;
    toDos: any;
}
function Board({ boardId, toDos }: BoardProps) {
    return (
        <Droppable droppableId={boardId}>
            {(magic, snapshot) => {
                return (
                    <div ref={magic.innerRef}>
                        {toDos.map((toDo: IToDo, index: number) => (
                            <Draggable draggableId={String(toDo.id)} index={index}>
                                {(magic, snapshot) => (
                                    <div
                                        ref={magic.innerRef}
                                        {...magic.draggableProps}
                                        {...magic.dragHandleProps}
                                    >
                                        <ToDoCard index={index} {...toDo} />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                    </div>
                );
            }}
        </Droppable>
    );
}

export default function DragBoard() {
    const toDos = useRecoilValue(dividedToDos);
    const aa = "DONE";
    console.log(toDos);
    console.log(Object.keys(toDos));
    console.log(toDos[aa]);
    const onDragEnd = () => {};
    return (
        // <></>
        <DragDropContext onDragEnd={onDragEnd}>
            {Object.keys(toDos).map((boardId: string) => {
                return <Board boardId={boardId} toDos={toDos[boardId]} />;
            })}
        </DragDropContext>
    );
}
