import { createSelector } from 'reselect';

const selectTodoReducer = (state) => state.todo;

export const selectTodoItems = createSelector(
  [selectTodoReducer],
  (todo) => todo.todoItems
);
