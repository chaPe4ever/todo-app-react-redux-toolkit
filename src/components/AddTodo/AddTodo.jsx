import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todos/todos.reducer';
import { Todo } from '../../utils/types';

const AddTodo = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');

  function addTodoHandler() {
    if (todoText.length < 1) {
      alert('You should provide a text in your todo item before adding it');
    } else {
      const todo = Todo({ text: todoText });
      dispatch(addTodo(todo));
      setTodoText('');
    }
  }

  return (
    <div className="flex gap-2">
      <input
        className="flex-1 rounded-xl border-2 p-2"
        placeholder="Your next todo"
        value={todoText}
        required
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button
        onClick={addTodoHandler}
        className="rounded-xl border-2 border-amber-500 bg-amber-100 px-2 hover:bg-amber-200 md:cursor-pointer"
      >
        ADD
      </button>
    </div>
  );
};

export default AddTodo;
