import { IToDo, toDoState, Categories } from "../atoms";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { useEffect } from "react";

const ToDoCard = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 300px;
    background-color: #e4e4e4;
`;
const Category = styled.div``;

const CategoryBtn = styled.button`
    border-radius: 10px;
    background-color: #2f67a7;
    color: white;
    padding: 10px;
`;
export default function ToDo({ id, text, category }: IToDo) {
    const [toDos, setToDos] = useRecoilState(toDoState);
    const onClick = (newCategory: IToDo["category"]) => {
        setToDos((oldToDos) => {
            const targetIndex = toDos.findIndex((toDo) => toDo.id === id);
            const newToDo = { text, id, category: newCategory };
            const front = oldToDos.slice(0, targetIndex);
            const back = oldToDos.slice(targetIndex + 1);
            return [...front, newToDo, ...back];
        });
    };
    useEffect(() => {
        localStorage.setItem("localToDos", JSON.stringify(toDos));
    }, [toDos]);
    return (
        <ToDoCard>
            <li>해야할 일 : {text}</li>
            <li>상태 : {category}</li>
            <Category>
                {category !== Categories.DOING && (
                    <CategoryBtn onClick={() => onClick(Categories.DOING)}>Doing</CategoryBtn>
                )}
                {category !== Categories.TO_DO && (
                    <CategoryBtn onClick={() => onClick(Categories.TO_DO)}>To do</CategoryBtn>
                )}
                {category !== Categories.DONE && (
                    <CategoryBtn onClick={() => onClick(Categories.DONE)}>DONE</CategoryBtn>
                )}
            </Category>
        </ToDoCard>
    );
}
