import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, toDoState } from "../atoms";
import { useEffect } from "react";
const Form = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    padding: 30px 0px;
`;
const Label = styled.label`
    margin: 10px;
    width: 100%;
    text-align: left;
    padding-left: 10px;
`;
const ToDoInput = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 25px;
    text-align: left;
    padding-left: 20px;
`;
const Box = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 34px;
    margin-top: 5px;
`;
const Select = styled.select`
    font-size: 12px;
    border: 1px solid ${(props) => props.theme.navBgColor};
    border-radius: 10px;
    height: 100%;
    padding: 0px 3px;
    margin-right: 10px;
    transition: all 0.3s ease;
`;
const Error = styled.div`
    position: absolute;
    left: 15px;
    top: 5px;
    font-size: 12px;
    color: ${(props) => props.theme.dangerColor};
`;
const Correct = styled(Error)`
    color: green;
`;
const SubmitBtn = styled.button`
    font-size: 12px;
`;

interface IForm {
    toDo: string;
    Category: string;
}
export default function CreateToDo() {
    const [toDos, setToDos] = useRecoilState(toDoState);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setError,
    } = useForm<IForm>({ mode: "onChange" });

    const onvalid = (data: IForm) => {
        reset({
            toDo: "",
        });
        setToDos((prev) => [
            { id: Date.now(), text: data.toDo, category: data.Category as Categories },
            ...prev,
        ]);
        console.log("완료!", toDos);
    };

    useEffect(() => {
        setError("toDo", {
            message: "해야할 일을 입력해 주세요!",
        });
        localStorage.setItem("localToDos", JSON.stringify(toDos));
    }, [toDos]);

    return (
        <Form onSubmit={handleSubmit(onvalid)}>
            <Label htmlFor="toDo">해야 할 일</Label>
            <ToDoInput
                {...register("toDo", {
                    required: "해야할 일을 입력해 주세요!",
                    minLength: {
                        value: 2,
                        message: "두 글자 이상 입력해주세요.",
                    },
                })}
                id="toDo"
                type="text"
                placeholder="해야할 일"
                autoComplete="off"
            />
            <Box>
                {errors.toDo?.message ? (
                    <Error>{errors.toDo?.message}</Error>
                ) : (
                    <Correct>화이팅이에요!</Correct>
                )}
                <Select
                    {...register("Category", {
                        required: "선택해주세요!",
                    })}
                    id="Category"
                >
                    <option value={Categories.TO_DO}>To do</option>
                    <option value={Categories.DOING}>Doing</option>
                    <option value={Categories.DONE}>Done</option>
                </Select>
                {errors.Category?.message && <Error>{errors.Category?.message}</Error>}
                <SubmitBtn>작성하기!</SubmitBtn>
            </Box>
        </Form>
    );
}
