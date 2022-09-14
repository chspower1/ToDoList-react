import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();
export interface IToDo {
    id: number;
    text: string;
    index?: number;
    category: Categories;
}
export enum Categories {
    ALL = "ALL",
    TO_DO = "TO_DO",
    DOING = "DOING",
    DONE = "DONE",
}

export const categoryState = atom<Categories>({
    key: "category",
    default: Categories.ALL,
    effects_UNSTABLE: [persistAtom],
});
export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
    effects_UNSTABLE: [persistAtom],
});
export const toDosSelector = selector({
    key: "toDosSelector",
    get: ({ get }) => {
        const toDos = get(toDoState);
        const category = get(categoryState);
        if (category === Categories.ALL) return toDos;
        else return toDos.filter((toDo) => toDo.category === category);
    },
});
