import { useEffect } from 'react';
import TodoList from '../TodoList/TodoList';
import { fetchTodos } from '../../utils/api';
import { useDispatch } from 'react-redux';
import { setTodos } from '../../store/todos/todos.reducer';
import AddTodo from '../AddTodo/AddTodo';
import TodoFilters from '../FiltersBar/FiltersBar';
import SearchBar from '../SearchBar/SearchBar';

const HomePage = () => {
  const dispatch = useDispatch();

  // Fetch and initialise the todos into store
  useEffect(() => {
    const getTodosAsync = async () => dispatch(setTodos(await fetchTodos()));
    getTodosAsync();
  }, [dispatch]);

  return (
    <main className="m-5 flex flex-col gap-5">
      <h1 className="mb-5 text-4xl font-extrabold">Today's TODO list</h1>
      <AddTodo />
      <TodoFilters />
      <TodoList />
    </main>
  );
};

export default HomePage;
