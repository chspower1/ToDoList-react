import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { Categories, toDoState } from "../../atoms";
import { useEffect } from "react";
const Container = styled.div`
`;
const Form = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    padding: 30px 0px;
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
const ColorGuid = styled.div`
    position: absolute;
    right: 5%;
`;
const GuideBox = styled.div`
    display: flex;
    margin: 5px 0px;
    &.TO_DO {
        div {
            background-color: #f0c507;
        }
        h3 {
            color: #967b03;
        }
    }
    &.DOING {
        div {
            background-color: #2352a8;
        }
        h3 {
            color: #083383;
        }
    }
    &.DONE {
        div {
            background-color: #469253;
        }
        h3 {
            color: #148326;
        }
    }
`;
const CategoryName = styled.h3`
    font-size: 12px;
    margin-left: 5px;
`;
const CategoryColor = styled.div`
    width: 10px;
    height: 10px;
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
            type: "required",
        });
    }, [toDos]);

    return (
        <Container>
            <Form onSubmit={handleSubmit(onvalid)}>
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
            <ColorGuid>
                <GuideBox className="TO_DO">
                    <CategoryColor />
                    <CategoryName>To do</CategoryName>
                </GuideBox>
                <GuideBox className="DOING">
                    <CategoryColor />
                    <CategoryName>Doing</CategoryName>
                </GuideBox>
                <GuideBox className="DONE">
                    <CategoryColor />
                    <CategoryName>Done</CategoryName>
                </GuideBox>
            </ColorGuid>
        </Container>
    );
}
