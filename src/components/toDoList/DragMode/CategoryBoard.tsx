import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { IToDo } from "../../../atoms";
import ToDoCard from "../SelecMode/ToDoCard";
import styled from "styled-components";
import MiniCard from "./MiniCard";
interface BoardProps {
    boardId: string;
    toDos: IToDo[];
}

const Board = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(10, 1fr);
    background-color: #edf2ff;
    padding: 10px;
    margin: 15px;
    overflow: hidden;
    border-radius: 10px;
`;
const CardBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function CategoryBoard({ boardId, toDos }: BoardProps) {
    return (
        <Droppable droppableId={boardId}>
            {(magic, snapshot) => (
                <Board ref={magic.innerRef}>
                    {toDos.map((toDo: IToDo, index: number) => (
                        <Draggable draggableId={String(toDo.id)} index={index}>
                            {(magic, snapshot) => (
                                <CardBox
                                    ref={magic.innerRef}
                                    {...magic.draggableProps}
                                    {...magic.dragHandleProps}
                                >
                                    <MiniCard index={index} {...toDo} />
                                </CardBox>
                            )}
                        </Draggable>
                    ))}
                    {magic.placeholder}
                </Board>
            )}
        </Droppable>
    );
}
