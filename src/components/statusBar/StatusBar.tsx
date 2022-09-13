import styled from "styled-components";
import Search from "./Search";
import SelectCategory from "./SelectCategory";

// styled-components
const Container = styled.nav`
    height: 50px;
    display: flex;
    align-items: center;

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
