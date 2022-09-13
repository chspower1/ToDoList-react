import { IToDo, toDoState, Categories } from "../atoms";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { useEffect } from "react";

const ToDoCardContainer = styled.ul`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 200px;
    height: 300px;
    border-radius: 10px;
    margin: 0px 15px;
    background-color: white;
`;
const Number = styled.p`
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 14px;
    color: #4e4e4e;
`;
const Box = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 10px;
    width: 100%;
    align-items: flex-start;
`;
const Title = styled.h1`
    font-size: 12px;
    margin-bottom: 10px;
    color: #4e4e4e;
`;
const Contents = styled.p`
    font-size: 16px;
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
export default function ToDoCard({ id, text, category, index }: IToDo) {
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
        <ToDoCardContainer>
            <Number>No.{index! + 1}</Number>
            <Box>
                <Title>해야할 일</Title>
                <Contents>{text}</Contents>
            </Box>
            <Box>
                <Title>상태</Title>
                <Contents>{category}</Contents>
            </Box>
            <Category>
                {category !== Categories.TO_DO && (
                    <CategoryBtn onClick={() => onClick(Categories.TO_DO)}>To do</CategoryBtn>
                )}
                {category !== Categories.DOING && (
                    <CategoryBtn onClick={() => onClick(Categories.DOING)}>Doing</CategoryBtn>
                )}
                {category !== Categories.DONE && (
                    <CategoryBtn onClick={() => onClick(Categories.DONE)}>DONE</CategoryBtn>
                )}
                <DeleteBtn onClick={onClickDel}>Del</DeleteBtn>
            </Category>
        </ToDoCardContainer>
    );
}
