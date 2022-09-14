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
    justify-content: space-evenly;
    align-items: center;
    width: 200px;
    height: 300px;
    border-radius: 10px;
    margin: 0px 15px;
    background-color: white;
    &.TO_DO {
        border: 2px solid #f0c507;
        background-color: #fffef9;
    }
    &.DOING {
        border: 2px solid #2352a8;
        background-color: #f9fbff;
    }
    &.DONE {
        border: 2px solid #469253;
        background-color: #ffffff;
    }
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
    padding: 7px 10px;
    margin: 0px 5px;
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
    margin-top: -20px;
    margin-bottom: -30px;
    margin-left: 130px;
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
                    <CategoryBtn
                        onClick={() => onClick(Categories.TO_DO)}
                        title="To do"
                        className="toDo"
                    >
                        <Todo size={24} />
                        To do
                    </CategoryBtn>
                )}
                {category !== Categories.DOING && (
                    <CategoryBtn
                        onClick={() => onClick(Categories.DOING)}
                        title="Doing"
                        className="doing"
                    >
                        <PersonRunning size={24} />
                        Doing
                    </CategoryBtn>
                )}
                {category !== Categories.DONE && (
                    <CategoryBtn
                        onClick={() => onClick(Categories.DONE)}
                        title="Done"
                        className="done"
                    >
                        <DownloadDone size={24} />
                        Done
                    </CategoryBtn>
                )}
            </Category>
            <DeleteBtn onClick={onClickDel} title="Delete" className="delete">
                <Delete size={18} />
            </DeleteBtn>
        </ToDoCardContainer>
    );
}
