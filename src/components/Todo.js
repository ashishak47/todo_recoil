import React from 'react'
import { useRecoilState } from 'recoil'
import { todoListState } from '../store'

const Todo = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const index = todoList.findIndex((listItem) => listItem === item)

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    })

    setTodoList(newList)
  }

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index)

    setTodoList(newList)
  }
  let { isComplete, text } = item
  return (
    <li className={isComplete ? 'completed' : ''}>
      <input
        className="toggle"
        type="checkbox"
        checked={isComplete}
        onChange={toggleItemCompletion}
        onClick={(ev) => ev.stopPropagation()}
      />
      <label>{text}</label>
      <button className="destroy" type="button" onClick={deleteItem} />
    </li>
  )
}

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)]
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)]
}

export default Todo
