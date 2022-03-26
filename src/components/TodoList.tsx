import React from "react";
import { useRecoilValue } from "recoil";
import { todoListState } from "../state/todoListState";

export const TodoList = () => {
  const todoList = useRecoilValue(todoListState);
  return (
    <>
      <div>TodoListStats</div>
      <div>TodoListFilters</div>
      <div>TodoItemCreator</div>

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};
