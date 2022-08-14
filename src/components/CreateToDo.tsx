import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { categoryState, IToDo, toDoState } from "./atoms";
const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;
`;
const Error = styled.div`
    color: red;
`;
interface IForm {
    toDo: string;
    // date: Date;
}
export default function CreateToDo() {
    const [toDos, setToDos] = useRecoilState(toDoState);
    const [category, setCategory] = useRecoilState(categoryState);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IForm>();

    const onvalid = (data: IForm) => {
        setToDos((prev) => [{ id: Date.now(), text: data.toDo, category }, ...prev]);
        console.log("완료!", toDos);
    };
    return (
        <>
            <Form onSubmit={handleSubmit(onvalid)}>
                <input
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
                {/* <input
                    {...register("date", {
                        required: "날짜를 선택해주세요",
                        validate: {
                            after: (value) =>
                                new Date(value) >= new Date()
                                    ? true
                                    : "지난 시간은 선택할 수 없습니다.",
                        },
                    })}
                    type="date"
                />
                {errors.date?.message && <Error>{errors.date?.message}</Error>} */}
                <button>완료!</button>
            </Form>
        </>
    );
}
