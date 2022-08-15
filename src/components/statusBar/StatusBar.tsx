import styled from "styled-components";
import tw from "twin.macro";
import Search from "./Search";
import SelectCategory from "./SelectCategory";

// styled-components
const Container = styled.nav`
    ${tw`flex items-center h-14`}
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
