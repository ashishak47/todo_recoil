import React from 'react'
import { useSetRecoilState } from "recoil";
import { v4 as uuid4 } from 'uuid'
import { todoListState } from "../store";

const AddTodo = () => {
  let input;
  const setTodoList = useSetRecoilState(todoListState);
  const addItem = (inputValue) => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    input.value = '';
  };

  function getId() {
    return uuid4();
  }


  return (
    <form onSubmit={e => {
      e.preventDefault();
      if (!input.value.trim()) {
        return
      }
      addItem(input.value);
      input.value = '';
    }}>
      <input className="new-todo" ref={node => input = node} placeholder="What needs to be done?" />
    </form>
  )
}

export default AddTodo;
