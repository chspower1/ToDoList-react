import { useRecoilState } from "recoil";
import styled from "styled-components";
import { Categories, categoryState } from "../atoms";

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const Select = styled.select`
    margin-top: 10px;
    font-size: 16px;
    padding: 10px;
    border-radius: 10px;
    &.TO_DO {
        border: 2px solid #f0c507;
    }
    &.DOING {
        border: 2px solid #2352a8;
    }
    &.DONE {
        border: 2px solid #469253;
    }
`;
export default function SelectCategory() {
    const [category, setCategory] = useRecoilState(categoryState);
    const onInput = (e: React.FormEvent<HTMLSelectElement>) => {
        setCategory(e.currentTarget.value as Categories);
    };
    return (
        <Container>
            <h1>카테고리별로 보기</h1>
            <Select value={category} onChange={onInput} className={category}>
                <option value={Categories.ALL} style={{ color: "#252525" }}>
                    All
                </option>
                <option value={Categories.TO_DO} style={{ color: "#c5a100" }}>
                    To do
                </option>
                <option value={Categories.DOING} style={{ color: "#2352a8" }}>
                    Doing
                </option>
                <option value={Categories.DONE} style={{ color: "#469253" }}>
                    Done
                </option>
            </Select>
        </Container>
    );
}
