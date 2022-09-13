import { Link } from "react-router-dom";
import styled from "styled-components";
// styled-components
const Container = styled.section`
    width: 300px;
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
const Title = styled.h1`
    font-size: 28px;
`;
const NavList = styled.ul`
    width: 100%;
    margin-left: 30px;
`;
const Li = styled.li`
    width: 100%;
    padding: 15px 0px;
    padding-left: 20px;
    color: white;
    transition: color 0.4s ease;
    &:hover {
        color: ${(props) => props.theme.navHoverColor};
    }
`;

export default function NavBar() {
    return (
        <Container>
            <Profile>
                <Title>ToDos</Title>
            </Profile>
            <NavList>
                <Link to="/">
                    <Li>Home</Li>
                </Link>
                <Link to="/todolist">
                    <Li>To do list</Li>
                </Link>
            </NavList>
        </Container>
    );
}
