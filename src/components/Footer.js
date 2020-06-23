import React from 'react'
import Link from './Link'
import {useRecoilState} from 'recoil';
import {todoListFilterState} from '../store';
import ActionsPanel from './ActionsPanel';
import VisibilityFilters from '../constants/visibilityFilters';
import TodoListStats from './TodoStats';


const Footer = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

    const updateFilter = (value) => {
      setFilter(value);
    };
    const onClickShowAll = () => {
      updateFilter(VisibilityFilters.SHOW_ALL);
    }
    const onClickShowActive = () => {
      updateFilter(VisibilityFilters.SHOW_ACTIVE);
    }
    const onClickShowCompleted = () => {
      updateFilter(VisibilityFilters.SHOW_COMPLETED);
    }

  return (
  <footer className="footer">
    <div className="todo-count">
      <TodoListStats />
    </div>
    <div className="filter-action-panel">
      <ul className="filters">
        <Link onClick={onClickShowAll} active={filter === VisibilityFilters.SHOW_ALL}>All</Link>
        <Link onClick={onClickShowActive} active={filter ===VisibilityFilters.SHOW_ACTIVE}>Active</Link>
        <Link onClick={onClickShowCompleted} active={filter ===VisibilityFilters.SHOW_COMPLETED}>Completed</Link>
      </ul>
      <div className="action-panel">
        <ActionsPanel />
      </div>
    </div>


  </footer>
)}

export default Footer
