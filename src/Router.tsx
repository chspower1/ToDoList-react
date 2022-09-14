import { HashRouter as BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import ToDoList from "./components/toDoList/ToDoList";
import styled from "styled-components";
import Home from "./components/Home";
import DragBoard from "./components/DragBoard";

const Container = styled.div`
    display: flex;
    background-color: ${(props) => props.theme.bgColor};
    height: auto;
    flex-flow: 1;
`;
const ContentContainer = styled(Container)`
    width: 100%;
    flex-direction: column;
`;
export default function Router() {
    return (
        <BrowserRouter>
            <Container>
                <NavBar />
                <ContentContainer>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/todolist" element={<ToDoList />} />
                        <Route path="/dragboard" element={<DragBoard />} />
                    </Routes>
                </ContentContainer>
            </Container>
        </BrowserRouter>
    );
}
