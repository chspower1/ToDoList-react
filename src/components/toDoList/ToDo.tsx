import { IToDo, toDoState, Categories } from "../atoms";
import { useRecoilState } from "recoil";
export default function ToDo({ id, text, category }: IToDo) {
    const [ToDos, setToDos] = useRecoilState(toDoState);
    const onClick = (newCategory: IToDo["category"]) => {
        setToDos((oldToDos) => {
            const targetIndex = ToDos.findIndex((toDo) => toDo.id === id);
            const newToDo = { text, id, category: newCategory };
            const front = oldToDos.slice(0, targetIndex);
            const back = oldToDos.slice(targetIndex + 1);
            return [...front, newToDo, ...back];
        });
        // setToDos((prev) => [...prev]);
    };

    return (
        <ul>
            <li>해야할 일 : {text}</li>
            <li>상태 : {category}</li>
            {/* <li>날짜 : {String(date)}</li> */}
            {category !== Categories.DOING && (
                <button onClick={() => onClick(Categories.DOING)}>Doing</button>
            )}
            {category !== Categories.TO_DO && (
                <button onClick={() => onClick(Categories.TO_DO)}>To do</button>
            )}
            {category !== Categories.DONE && (
                <button onClick={() => onClick(Categories.DONE)}>DONE</button>
            )}
        </ul>
    );
}
