import { createGlobalStyle } from "styled-components";
import "./assets/fonts/fonts.css";

import Router from "./Router";
import reset from "styled-reset";
const GlobalStyled = createGlobalStyle`
    ${reset}
    :focus{
        outline: none;
    }
    * {
        border:none;
        font-family: "Sebang";
        box-sizing: border-box;
    }
    body{
        font-family: "Sebang";
    }
    a{
        text-decoration: none;
    }
    button{
        border-radius: 10px;
        border: none;
        cursor:pointer;
        background-color: ${(props) => props.theme.btnBgColor};
        color:white;
        padding:10px;
        transition: all 0.3s ease;
        
        &:hover{
            background-color: ${(props) => props.theme.btnHoverColor};
        }
    }
    input{
        border-radius: 100px;
        
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
