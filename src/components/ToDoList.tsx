import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import { toDosSelector, categoryState, Categories } from "./atoms";
import { useRecoilState, useRecoilValue } from "recoil";

export default function ToDoList() {
    const toDos = useRecoilValue(toDosSelector);
    const [category, setCategory] = useRecoilState(categoryState);
    const onInput = (e: React.FormEvent<HTMLSelectElement>) => {
        setCategory(e.currentTarget.value as Categories);
    };
    return (
        <>
            <CreateToDo />
            <select value={category} onChange={onInput}>
                <option value={Categories.TO_DO}>To do</option>
                <option value={Categories.DOING}>Doing</option>
                <option value={Categories.DONE}>Done</option>
            </select>
            {toDos.map((toDo) => (
                <ToDo key={toDo.id} {...toDo} />
            ))}
        </>
    );
}
