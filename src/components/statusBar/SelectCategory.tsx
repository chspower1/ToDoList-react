import { useRecoilState } from "recoil";
import { Categories, categoryState } from "../atoms";

export default function SelectCategory() {
    const [category, setCategory] = useRecoilState(categoryState);
    const onInput = (e: React.FormEvent<HTMLSelectElement>) => {
        setCategory(e.currentTarget.value as Categories);
    };
    return (
        <select value={category} onChange={onInput}>
            <option value={Categories.TO_DO}>To do</option>
            <option value={Categories.DOING}>Doing</option>
            <option value={Categories.DONE}>Done</option>
        </select>
    );
}
