import React, { ChangeEvent, FC } from "react";
import { useRecoilState } from "recoil";
import { todoListState, Todo } from "../state/todoListState";

function replaceItemAtIndex(arr: Todo[], index: number, newValue: Todo) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr: Todo[], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

interface TodoItemProps {
  item: Todo;
}

export const TodoItem: FC<TodoItemProps> = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => (listItem = item));

  const editItemText = (event: ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: event.target.value,
    });
    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };
  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
};
