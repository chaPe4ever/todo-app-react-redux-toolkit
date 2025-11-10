import { useEffect } from 'react';
import TodoList from '../TodoList/TodoList';
import { fetchTodos } from '../../utils/api';
import { useDispatch } from 'react-redux';
import { setTodos } from '../../store/todos/todo.reducer';

const HomePage = () => {
  const dispatch = useDispatch();

  // Fetch and initialise the todos into store
  useEffect(() => {
    const getTodosAsync = async () => dispatch(setTodos(await fetchTodos()));
    getTodosAsync();
  }, [dispatch]);

  return (
    <main>
      <h1>Today's TODO list</h1>
      <TodoList />
    </main>
  );
};

export default HomePage;
