import React, { Fragment } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { toggleAllTodos, todoListState } from '../store';


const SelectAll = () => {
  const toggledTodoList = useRecoilValue(toggleAllTodos);
  const setToggledTodoList = useSetRecoilState(todoListState);

  const onToggle = () => {
    setToggledTodoList(existingTodoListAll => {
      return existingTodoListAll.map(oldTodo => {
        const index = toggledTodoList.findIndex((listItem) => listItem.id === oldTodo.id);
        if(index === -1) {
          return {...oldTodo};
        }
        else {
          return {...toggledTodoList[index]}
        }
      });

    });
  }
  return (
  <Fragment>
    <input id="toggle-all" className="toggle-all" type="checkbox" onChange={onToggle}/>
    <label htmlFor="toggle-all"/>
  </Fragment>
)}

export default SelectAll
