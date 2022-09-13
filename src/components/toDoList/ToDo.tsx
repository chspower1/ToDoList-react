import { IToDo, toDoState, Categories } from "../atoms";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { useEffect } from "react";

const ToDoCard = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 200px;
    height: 300px;
    border-radius: 10px;
    margin: 0px 15px;
    background-color: white;
    
`;
const Category = styled.div``;

const CategoryBtn = styled.button`
    margin: 0px 5px;
`;
const DeleteBtn = styled(CategoryBtn)`
    background-color: ${(props) => props.theme.dangerColor};
    &:hover {
        background-color: #a33434;
    }
`;
export default function ToDo({ id, text, category, index }: IToDo) {
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
    const onClickDel = () => {
        setToDos((oldToDos) => {
            const targetIndex = toDos.findIndex((toDo) => toDo.id === id);
            const front = oldToDos.slice(0, targetIndex);
            const back = oldToDos.slice(targetIndex + 1);
            return [...front, ...back];
        });
    };
    useEffect(() => {
        localStorage.setItem("localToDos", JSON.stringify(toDos));
    }, [toDos]);
    return (
        <ToDoCard>
            <li>No.{index! + 1}</li>
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
                <DeleteBtn onClick={onClickDel}>Del</DeleteBtn>
            </Category>
        </ToDoCard>
    );
}
