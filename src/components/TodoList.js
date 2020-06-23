import React from 'react'
import Todo from './Todo'
import SelectAll from './SelectAll'

import { useRecoilValue } from 'recoil';

import { filteredTodoListState } from '../store';

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);
  const items = todoList.map((todoItem) => (
    <Todo key={todoItem.id} item={todoItem} />
  ));

  return (
    <>
      {!!todoList.length && <SelectAll />}
      <ul className="todo-list">{items}</ul>
    </>
  )
}

export default TodoList
