import styled from "styled-components";
import Search from "./Search";
import SelectCategory from "./SelectCategory";

// styled-components
const Container = styled.nav`
    display: flex;
    align-items: center;
    height: 60px;
    background-color: ${(props) => props.theme.btnBgWhite};
`;
export default function StatusBar() {
    return (
        <Container>
            <SelectCategory />
            <Search />
        </Container>
    );
}
