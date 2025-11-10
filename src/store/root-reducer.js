import { combineReducers } from '@reduxjs/toolkit';
import { todosReducer } from './todos/todos.reducer';
import { filtersReducer } from './filters/filters.reducer';

export const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
});
