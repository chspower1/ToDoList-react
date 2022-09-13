import { Link } from "react-router-dom";
import styled from "styled-components";
// styled-components
const Container = styled.section`
    background-color: ${(props) => props.theme.navBgColor};
    color: ${(props) => props.theme.btnBgWhite};
`;
const Profile = styled.header`
    width: 100%;
    height: 70px;
    padding: 10px;
    padding-left: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const UserName = styled.h1`
    font-size: 20px;
`;
const UserState = styled.h1``;
const NavList = styled.ul`
    width: 100%;
`;
const Li = styled.li`
    width: 100%;
    padding: 10px 0px;
    padding-left: 20px;
`;

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
