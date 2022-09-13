import { useRecoilState } from "recoil";
import styled from "styled-components";
import { Categories, categoryState } from "../atoms";

const Select = styled.select``;
export default function SelectCategory() {
    const [category, setCategory] = useRecoilState(categoryState);
    const onInput = (e: React.FormEvent<HTMLSelectElement>) => {
        setCategory(e.currentTarget.value as Categories);
    };
    return (
        <Select value={category} onChange={onInput}>
            <option value={Categories.ALL}>All</option>
            <option value={Categories.TO_DO}>To do</option>
            <option value={Categories.DOING}>Doing</option>
            <option value={Categories.DONE}>Done</option>
        </Select>
    );
}
