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
export interface ToDos {
    TO_DO: IToDo[];
    DOING: IToDo[];
    DONE: IToDo[];
}
interface IToDoState {
    [key: string]: string[];
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
export const dividedToDos = selector({
    key: "dividedToDos",
    get: ({ get }) => {
        const toDos = get(toDoState);
        const result: ToDos = { TO_DO: [], DOING: [], DONE: [] };
        toDos.map((toDo) => {
            if (toDo.category === "TO_DO") {
                result.TO_DO.push(toDo);
            } else if (toDo.category === "DONE") {
                result.DONE.push(toDo);
            } else if (toDo.category === "DOING") {
                result.DOING.push(toDo);
            }
        });
        return result;
    },
});
