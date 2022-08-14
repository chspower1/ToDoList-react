import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import { toDosSelector, categoryState, Icategories } from "./atoms";
import { useRecoilState, useRecoilValue } from "recoil";

export default function ToDoList() {
    const toDos = useRecoilValue(toDosSelector);
    const [category, setCategory] = useRecoilState(categoryState);
    const onInput = (e: React.FormEvent<HTMLSelectElement>) => {
        setCategory(e.currentTarget.value as Icategories);
    };
    return (
        <>
            <CreateToDo />
            <select value={category} onChange={onInput}>
                <option value="TO_DO">To do</option>
                <option value="DOING">Doing</option>
                <option value="DONE">Done</option>
            </select>
            {toDos.map((toDo) => (
                <ToDo key={toDo.id} {...toDo} />
            ))}
        </>
    );
}
