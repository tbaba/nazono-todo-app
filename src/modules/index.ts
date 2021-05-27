import { atom, MutableSnapshot } from "recoil";

export type Todo = {
  id: number;
  content: string;
  isCompleted: boolean;
};

export const todosState = atom<Todo[]>({
  key: "state/todos",
  default: [],
});

let id = 0;
export function getId() {
  return id++;
}

export function initialize({ set }: MutableSnapshot) {
  set(todosState, [
    {
      id: getId(),
      content: "ご飯を買ってくる",
      isCompleted: false,
    },
    {
      id: getId(),
      content: "手を洗う",
      isCompleted: false,
    },
  ]);
}
