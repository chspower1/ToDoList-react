import styled from "styled-components";
import { BeakerIcon } from "@heroicons/react/solid";

const Form = styled.form``;

const Searchbar = styled.input`
    background-color: ${(props) => props.theme.btnBgColor};
`;

const Btn = styled.button`
    border: none;
    margin: 0px 20px;
    position: absolute;
`;

export default function Search() {
    return (
        <Form>
            <Searchbar type="text" placeholder="Search" />
        </Form>
    );
}
