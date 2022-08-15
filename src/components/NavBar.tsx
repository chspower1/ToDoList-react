import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
// styled-components
const Container = styled.section`
    ${tw`flex flex-col items-center w-72 h-screen`}
    background-color: ${(props) => props.theme.navBgColor};
    color: ${(props) => props.theme.btnBgWhite};
`;
const Profile = styled.header`
    ${tw`w-full h-20 p-10 pl-14 flex justify-center items-start flex-col`}
`;
const UserName = styled.h1`
    ${tw`text-2xl`}
`;
const UserState = styled.h1`
    ${tw`text-sm font-medium`}
`;
const NavList = styled.ul`
    ${tw`w-full`}
`;
const Li = styled.li`
    ${tw`w-full pl-14 py-3 hover:bg-red-400 `}
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
