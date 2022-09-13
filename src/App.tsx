import { createGlobalStyle } from "styled-components";
import "./assets/fonts/fonts.css";

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
