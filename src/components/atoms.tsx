import { atom, selector } from "recoil";

export interface IToDo {
    id: number;
    text: string;
    // date: Date;
    category: Categories;
}
export enum Categories {
    TO_DO = "TO_DO",
    DOING = "DOING",
    DONE = "DONE",
}

export const categoryState = atom<Categories>({
    key: "category",
    default: Categories.TO_DO,
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
