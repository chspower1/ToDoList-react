import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HomeAlt } from "@styled-icons/boxicons-regular/HomeAlt";
import { ClipboardTaskListRtl } from "@styled-icons/fluentui-system-regular/ClipboardTaskListRtl";
import { ArrowIosBackOutline } from "@styled-icons/evaicons-outline/ArrowIosBackOutline";
import { ArrowIosForwardOutline } from "@styled-icons/evaicons-outline/ArrowIosForwardOutline";
import { DragDrop } from "@styled-icons/remix-line/DragDrop";

// styled-components
const Wrap = styled.nav<{ isFold: boolean }>`
    position: relative;
    transition: all 0.3s ease;
    width: ${(props) => (props.isFold ? "50px" : "300px")};
    height: auto;
    background-color: ${(props) => props.theme.navBgColor};
    color: ${(props) => props.theme.btnBgWhite};
`;
const Container = styled.section`
    position: sticky;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    top: 0px;
    width: 100%;
    height: 100vh;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;
const Li = styled.li`
    width: 100%;
    padding: 15px 0px;
    color: white;
    transition: color 0.4s ease;
    &:hover {
        color: ${(props) => props.theme.navHoverColor};
    }
`;
const FoldBtn = styled.button`
    text-align: right;
    z-index: 1000;
`;

export default function NavBar() {
    const [isFold, setIsFold] = useState(false);
    return (
        <Wrap isFold={isFold}>
            <Container>
                <FoldBtn onClick={() => setIsFold((cur) => !cur)}>
                    {isFold ? (
                        <ArrowIosForwardOutline size={22} />
                    ) : (
                        <ArrowIosBackOutline size={22} />
                    )}
                </FoldBtn>
                <Profile>{isFold ? "chs" : <Title>ToDos</Title>}</Profile>
                <NavList>
                    <Link to="/">
                        {isFold ? (
                            <Li>
                                <HomeAlt size={16} />
                            </Li>
                        ) : (
                            <Li>Home</Li>
                        )}
                    </Link>
                    <Link to="/todolist">
                        {isFold ? (
                            <Li>
                                <ClipboardTaskListRtl size={16} />
                            </Li>
                        ) : (
                            <Li>To Do List</Li>
                        )}
                    </Link>
                    <Link to="/dragboard">
                        {isFold ? (
                            <Li>
                                <DragDrop size={16} />
                            </Li>
                        ) : (
                            <Li>Drag Board</Li>
                        )}
                    </Link>
                </NavList>
            </Container>
        </Wrap>
    );
}
