import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../store";

function TodoListStats() {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  } = useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items active: {totalUncompletedNum}</li>
      <li>Completed: {formattedPercentCompleted} %</li>
    </ul>
  );
}

export default TodoListStats;
