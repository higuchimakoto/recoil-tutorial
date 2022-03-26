import React, { ChangeEvent, useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../state/todoListState";

export const TodoItemCreatro = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  let id = 0;
  const getId = () => id++;

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>addItem</button>
    </div>
  );
};
