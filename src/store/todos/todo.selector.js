import { createSelector } from 'reselect';

const selectTodosReducer = (state) => state.todos;

export const selectTodoItems = createSelector(
  [selectTodosReducer],
  (todos) => todos.todos
);
