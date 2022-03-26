import { atom } from "recoil";

export interface Todo {
  id: number;
  text: string;
  isComplete: boolean;
}

export const todoListState = atom<Todo[]>({
  key: "TodoList",
  default: [],
});
