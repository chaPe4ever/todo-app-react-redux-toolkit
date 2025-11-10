import { useSelector } from 'react-redux';
import { selectTodoItems } from '../../store/todos/todo.selector';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = () => {
  const todoItems = useSelector(selectTodoItems);

  return (
    <ul>
      {todoItems.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
