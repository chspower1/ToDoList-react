import { Link } from "react-router-dom";
import styled from "styled-components";

// styled-components
const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 100vh;
    background-color: ${(props) => props.theme.navBgColor};
`;

export default function NavBar() {
    return (
        <Container>
            <div>
                <h3>조호성</h3>
                <h5>상태</h5>
            </div>
            <ul>
                <Link to="/todolist">
                    <li>To do list</li>
                </Link>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </Container>
    );
}
