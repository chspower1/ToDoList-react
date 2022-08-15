import styled from "styled-components";
import { BeakerIcon } from "@heroicons/react/solid";
import tw from "twin.macro";

const Form = styled.form`
    ${tw`flex items-center relative`}
`;

const Searchbar = styled.input`
    ${tw`w-24 h-12 my-1 mx-5 p-1 rounded-full`}
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
            <Btn>
                <BeakerIcon className="h-10 w-10 text-blue-500" />
            </Btn>
        </Form>
    );
}
