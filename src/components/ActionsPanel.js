import React from 'react';
import { useSetRecoilState } from 'recoil'
import { todoListState } from '../store';
import Link from './Link'



const ActionsPanel = () => {
  const setTodoList = useSetRecoilState(todoListState);

  const deleteAllTodo = () => {
    setTodoList(existingTodoList => {
      return [];
    });
  }
  const deleteAllCompletedTodo = () => {
    console.log("delete All Completed");
    setTodoList(existingTodoList => {
      return existingTodoList.filter(oldTodoItem =>  !oldTodoItem.isComplete);
    });
  }
  return (
    <ul className="actions-panel filters">
      <Link active={false} onClick={deleteAllCompletedTodo}>Delete All Completed</Link>
      <Link active={false} onClick={deleteAllTodo}>Delete All</Link>
    </ul>
  )
}

export default ActionsPanel
