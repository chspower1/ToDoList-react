import { atom } from "recoil";

export interface IToDo {
    id: number;
    text: string;
    date: Date;
    category: "TO_DO" | "DONE" | "DOING";
}

export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
});
