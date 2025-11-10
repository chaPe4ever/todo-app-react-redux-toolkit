import { createSlice } from '@reduxjs/toolkit';
import { v4 as uid } from 'uuid';

const INITIAL_STATE = {
  todos: [],
};

const setTodoItems = (todos, todosToSet) => {
  return [
    ...todosToSet.map((todo) => {
      return {
        ...todo,
        isCompleted: false,
      };
    }),
  ];
};

const removeTodoItem = (todos, todoToRemove) => {
  const existingTodoItem = todos.find((todo) => todo.id === todoToRemove.id);

  if (existingTodoItem) {
    return todos.filter((todo) => todo.id !== todoToRemove.id);
  }

  return [...todos];
};

const addTodoItem = (todos, todoToAdd) => {
  return [...todos, { ...todoToAdd, id: uid(), isCommpleted: false }];
};

const toggleTodoItem = (todos, todoToToggle) => {
  return todos.map((todo) =>
    todo.id === todoToToggle.id
      ? { ...todo, isCompleted: !todo.isCompleted }
      : todo
  );
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState: INITIAL_STATE,
  reducers: {
    setTodos(state, action) {
      state.todos = setTodoItems(state.todos, action.payload);
    },
    addTodo(state, action) {
      state.todos = addTodoItem(state.todos, action.payload);
    },
    toggleTodo(state, action) {
      state.todos = toggleTodoItem(state.todos, action.payload);
    },
    removeTodo(state, action) {
      state.todos = removeTodoItem(state.todos, action.payload);
    },
  },
});

export const { setTodos, toggleTodo, removeTodo } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;
