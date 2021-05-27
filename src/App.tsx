import React from "react";
import { atom, MutableSnapshot, RecoilRoot, useRecoilValue } from "recoil";

let id = 0;
function getId() {
  return id++;
}

type Todo = {
  id: number;
  content: string;
  isCompleted: boolean;
};

const todosState = atom<Todo[]>({
  key: "state/todos",
  default: [],
});

const Todos = () => {
  const todos = useRecoilValue(todosState);

  const contents = todos.map((todo) => (
    <div key={`todo-${todo.id}`}>{todo.content}</div>
  ));
  return <>{contents}</>;
};

const initialize = ({ set }: MutableSnapshot) => {
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
};

export default function () {
  return (
    <RecoilRoot initializeState={initialize}>
      <Todos />
    </RecoilRoot>
  );
}
