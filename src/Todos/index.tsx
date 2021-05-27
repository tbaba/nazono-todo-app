import React from "react";
import { useRecoilValue } from "recoil";
import { todosState } from "../modules";

export const Todos = () => {
  const todos = useRecoilValue(todosState);

  const contents = todos.map((todo) => (
    <div key={`todo-${todo.id}`}>{todo.content}</div>
  ));
  return <>{contents}</>;
};
