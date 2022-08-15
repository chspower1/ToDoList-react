import { createGlobalStyle } from "styled-components";
import "./fonts/fonts.css";
import ToDoList from "./components/toDoList/ToDoList";
import NavBar from "./components/NavBar";
import StatusBar from "./components/statusBar/StatusBar";
import Router from "./Router";
const GlobalStyled = createGlobalStyle`
    * {
        font-family: "Sebang";
        box-sizing: border-box;
    }
`;

function App() {
    return (
        <>
            <GlobalStyled />
            <Router />
        </>
    );
}

export default App;
