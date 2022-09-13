import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoState } from "../atoms";
import { useEffect } from "react";
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
`;
const Error = styled.div`
    color: red;
`;
const ToDoInput = styled.input`
    width: 50%;
    height: 50px;
    border-radius: 25px;
    text-align: center;
`;

interface IForm {
    toDo: string;
}
export default function CreateToDo() {
    const [toDos, setToDos] = useRecoilState(toDoState);
    const category = useRecoilValue(categoryState);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IForm>();

    const onvalid = (data: IForm) => {
        setToDos((prev) => [{ id: Date.now(), text: data.toDo, category }, ...prev]);
        console.log("완료!", toDos);
    };
    useEffect(() => {
        localStorage.setItem("localToDos", JSON.stringify(toDos));
    }, [toDos]);
    return (
        <Form onSubmit={handleSubmit(onvalid)}>
            <ToDoInput
                {...register("toDo", {
                    required: "해야할 일을 입력해 주세요.",
                    minLength: {
                        value: 2,
                        message: "두 글자 이상 입력해주세요.",
                    },
                })}
                type="text"
                placeholder="해야할 일"
            />
            {errors.toDo?.message && <Error>{errors.toDo?.message}</Error>}
            <button>작성하기!</button>
        </Form>
    );
}
