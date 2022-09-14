import { useRecoilState } from "recoil";
import styled from "styled-components";
import { Categories, categoryState } from "../../../atoms";

const Container = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Select = styled.select`
    width: 100px;
    margin-top: 10px;
    font-size: 14px;
    padding: 7px;
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
const ColorGuid = styled.div`
    position: absolute;
    right: 5%;
`;
const Box = styled.div`
    display: flex;
    margin: 5px 0px;
    &.TO_DO {
        div {
            background-color: #f0c507;
        }
        h3 {
            color: #967b03;
        }
    }
    &.DOING {
        div {
            background-color: #2352a8;
        }
        h3 {
            color: #083383;
        }
    }
    &.DONE {
        div {
            background-color: #469253;
        }
        h3 {
            color: #148326;
        }
    }
`;
const CategoryName = styled.h3`
    font-size: 12px;
    margin-left: 5px;
`;
const CategoryColor = styled.div`
    width: 10px;
    height: 10px;
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
            <ColorGuid>
                <Box className="TO_DO">
                    <CategoryColor />
                    <CategoryName>To do</CategoryName>
                </Box>
                <Box className="DOING">
                    <CategoryColor />
                    <CategoryName>Doing</CategoryName>
                </Box>
                <Box className="DONE">
                    <CategoryColor />
                    <CategoryName>Done</CategoryName>
                </Box>
            </ColorGuid>
        </Container>
    );
}
