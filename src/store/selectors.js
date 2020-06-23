import { selector } from 'recoil'
import { todoListState, todoListFilterState } from './atoms'

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState)
    const list = get(todoListState)

    switch (filter) {
      case 'SHOW_COMPLETED':
        return list.filter((item) => item.isComplete)
      case 'SHOW_ACTIVE':
        return list.filter((item) => !item.isComplete)
      default:
        return list
    }
  },
})

export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(filteredTodoListState)
    const totalNum = todoList.length
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length
    const totalUncompletedNum = totalNum - totalCompletedNum
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    }
  },
})

export const toggleAllTodos = selector({
  key: 'toggleAllTodos',
  get: ({ get }) => {
    const list = get(filteredTodoListState)
    return list.map((todo) => ({ ...todo, isComplete: !todo.isComplete }))
  },
  set: ({ set }, newState) => {
    set(todoListFilterState, newState)
  },
})
