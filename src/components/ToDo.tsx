import { toDoState } from "./atoms";
import { useRecoilValue } from "recoil";

export default function ToDo() {
    const toDos = useRecoilValue(toDoState);
    return (
        <div>
            {toDos
                .map((i) => (
                    <ul key={i.id}>
                        <li>해야할 일 : {i.text}</li>
                        <li>상태 : {i.category}</li>
                        <li>날짜 : {String(i.date)}</li>
                    </ul>
                ))
                .reverse()}
        </div>
    );
}
