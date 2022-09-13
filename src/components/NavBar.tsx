import { Link } from "react-router-dom";
import styled from "styled-components";
// styled-components
const Container = styled.section`
    background-color: ${(props) => props.theme.navBgColor};
    color: ${(props) => props.theme.btnBgWhite};
`;
const Profile = styled.header``;
const UserName = styled.h1``;
const UserState = styled.h1``;
const NavList = styled.ul``;
const Li = styled.li``;

export default function NavBar() {
    return (
        <Container>
            <Profile>
                <UserName>조호성</UserName>
                <UserState>상태</UserState>
            </Profile>
            <NavList>
                <Link to="/todolist">
                    <Li>To do list</Li>
                </Link>
                <Li>2</Li>
                <Li>3</Li>
                <Li>4</Li>
            </NavList>
        </Container>
    );
}
