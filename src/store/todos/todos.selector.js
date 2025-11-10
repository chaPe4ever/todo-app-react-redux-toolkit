import { createSelector } from 'reselect';
import { STATUS } from '../../utils/types';

const selectTodosReducer = (state) => state.todos;
const selectFiltersReducer = (state) => state.filters;

export const selectFilteredTodos = createSelector(
  [selectTodosReducer, selectFiltersReducer],
  (todos, filters) =>
    todos.todos.filter((todo) => {
      // Filter by status
      if (filters.status === STATUS.COMPLETED && !todo.isCompleted) {
        return false;
      }
      if (filters.status === STATUS.UNCOMPLETED && todo.isCompleted) {
        return false;
      }
      return true;
    })
);
