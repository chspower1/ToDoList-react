import { getValue } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import { useForm } from "react-hook-form";
interface IForm {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    CheckingPassword: string;
    extraError?: string;
}
export default function ToDoList() {
    const {
        register,
        handleSubmit,
        formState,
        formState: { errors },
        setError,
        getValues,
    } = useForm<IForm>({
        mode: "onChange",
        defaultValues: {
            email: "@naver.com",
        },
    });
    const onValid = (data: IForm) => {
        // setError("extraError", { message: "오프라인" });
        console.log(data);
    };
    console.log(getValues("email"));
    console.log(errors);
    return (
        <div>
            <form
                style={{ display: "flex", flexDirection: "column" }}
                onSubmit={handleSubmit(onValid)}
            >
                <input
                    type="text"
                    placeholder="Email"
                    {...register("email", {
                        required: "required",
                        minLength: {
                            value: 5,
                            message: "your email is too short",
                        },
                        pattern: {
                            value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                            message: "오직 네이버만",
                        },
                    })}
                />
                <span>{errors?.email?.message && errors.email?.message}</span>
                <input
                    type="text"
                    placeholder="First Name"
                    {...register("firstName", {
                        required: "required",
                        validate: {
                            cho: (value) => (value.includes("cho") ? true : "cho"),
                        },
                    })}
                />
                <span>{errors?.firstName?.message && errors.firstName?.message}</span>
                <input
                    type="text"
                    placeholder="Second Name"
                    {...register("lastName", { required: "required" })}
                />
                <span>{errors?.lastName?.message && errors.lastName?.message}</span>
                <input
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: "required" })}
                />
                <span>{errors?.password?.message && errors.password?.message}</span>
                <input
                    type="password"
                    placeholder="Check Your Password"
                    {...register("CheckingPassword", {
                        required: "required",
                        validate: {
                            check: (value) =>
                                value === getValues("password")
                                    ? true
                                    : "비밀번호가 일치하지 않습니다.",
                        },
                    })}
                />
                <span>{errors?.CheckingPassword?.message && errors.CheckingPassword?.message}</span>
                <button>Add</button>
            </form>
            <div></div>
        </div>
    );
}
