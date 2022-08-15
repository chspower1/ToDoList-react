import styled from "styled-components";
import { BeakerIcon } from "@heroicons/react/solid";
const Form = styled.form`
    display: flex;
    align-items: center;
    position: relative;
`;

const Searchbar = styled.input`
    background-color: ${(props) => props.theme.btnBgColor};
    width: 100px;
    height: 50px;
    margin: 5px 20px;
    padding: 5px;
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
            <Btn>
                <BeakerIcon className="h-5 w-5 text-blue-500" />
            </Btn>
        </Form>
    );
}
