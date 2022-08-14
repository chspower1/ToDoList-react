import { atom, selector } from "recoil";

export interface IToDo {
    id: number;
    text: string;
    // date: Date;
    category: Icategories;
}
export type Icategories = "TO_DO" | "DONE" | "DOING";

export const categoryState = atom<Icategories>({
    key: "category",
    default: "TO_DO",
});
export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
});
export const toDosSelector = selector({
    key: "toDosSelector",
    get: ({ get }) => {
        const toDos = get(toDoState);
        const category = get(categoryState);
        return toDos.filter((toDo) => toDo.category === category);
    },
});
