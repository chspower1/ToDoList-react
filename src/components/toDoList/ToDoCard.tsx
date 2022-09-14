import { IToDo, toDoState, Categories } from "../atoms";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { Todo } from "@styled-icons/remix-line/Todo";
import { PersonRunning } from "@styled-icons/fa-solid/PersonRunning";
import { Delete } from "@styled-icons/fluentui-system-filled/Delete";
import { DownloadDone } from "@styled-icons/material-sharp/DownloadDone";

const ToDoCardContainer = styled.ul`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    height: 300px;
    border-radius: 10px;
    padding: 0px 10px;
    margin: 0px 15px;
    background-color: white;
`;
const Number = styled.p`
    font-size: 14px;
    color: #4e4e4e;
`;
const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0px 10px;
`;
const CategoryTag = styled.div`
    width: auto;
    padding: 7px;
    border-radius: 0px 0px 5px 5px;
    font-size: 14px;
    color: white;
    &.TO_DO {
        background-color: #ceb33a;
    }
    &.DOING {
        background-color: #2352a8;
    }
    &.DONE {
        background-color: #469253;
    }
`;
const ToDoBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 100%;
    height: 50%;
    border-radius: 10px;
    background-color: #f8f8f8;
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
const CategoryBox = styled(ToDoBox)`
    padding: 0px;
    background: none;
    height: 30%;
    margin-bottom: -15px;
`;
const BtnBox = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;
const CategoryBtn = styled.button`
    padding: 7px 10px;
    margin-right: 10px;
    width: 40%;
    height: 100%;
    &.toDo {
        background-color: #ceb33a;
    }
    &.doing {
        background-color: #2352a8;
    }
    &.done {
        background-color: #469253;
    }
`;
const DeleteBtn = styled(CategoryBtn)`
    background-color: ${(props) => props.theme.dangerColor};
    margin-right: 0px;
    padding: 7px;
    width: 20%;
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
    return (
        <ToDoCardContainer className={category}>
            <CardHeader>
                <CategoryTag className={category}>{category}</CategoryTag>
                <Number>No.{index! + 1}</Number>
            </CardHeader>
            <ToDoBox>
                <Title>해야할 일</Title>
                <Contents>{text}</Contents>
            </ToDoBox>

            <CategoryBox>
                <Title>카테고리 선택</Title>
                <BtnBox>
                    {category !== Categories.TO_DO && (
                        <CategoryBtn
                            onClick={() => onClick(Categories.TO_DO)}
                            title="To do"
                            className="toDo"
                        >
                            <Todo size={20} />
                        </CategoryBtn>
                    )}
                    {category !== Categories.DOING && (
                        <CategoryBtn
                            onClick={() => onClick(Categories.DOING)}
                            title="Doing"
                            className="doing"
                        >
                            <PersonRunning size={20} />
                        </CategoryBtn>
                    )}
                    {category !== Categories.DONE && (
                        <CategoryBtn
                            onClick={() => onClick(Categories.DONE)}
                            title="Done"
                            className="done"
                        >
                            <DownloadDone size={20} />
                        </CategoryBtn>
                    )}
                    <DeleteBtn onClick={onClickDel} title="Delete" className="delete">
                        <Delete size={20} />
                    </DeleteBtn>
                </BtnBox>
            </CategoryBox>
        </ToDoCardContainer>
    );
}
