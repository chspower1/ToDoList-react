import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import StatusBar from "./components/statusBar/StatusBar";
import ToDoList from "./components/toDoList/ToDoList";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    background-color: ${(props) => props.theme.bgColor};
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
                    <StatusBar />
                    <Routes>
                        <Route path="/todolist" element={<ToDoList />} />
                    </Routes>
                </ContentContainer>
            </Container>
        </BrowserRouter>
    );
}
