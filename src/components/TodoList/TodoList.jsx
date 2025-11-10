import { useDispatch, useSelector } from 'react-redux';
import { selectTodoItems } from '../../store/todos/todos.selector';
import { toggleTodo, removeTodo } from '../../store/todos/todos.reducer';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = () => {
  const todoItems = useSelector(selectTodoItems);
  const dispatch = useDispatch();

  function toggleTodoItemHandler(todo) {
    dispatch(toggleTodo(todo));
  }

  function removeTodoItemHandler(todo) {
    dispatch(removeTodo(todo));
  }

  return (
    <ul>
      {todoItems.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodoItemHandler={removeTodoItemHandler}
          onClick={() => toggleTodoItemHandler(todo)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
