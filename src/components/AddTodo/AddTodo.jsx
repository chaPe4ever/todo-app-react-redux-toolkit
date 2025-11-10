import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todos/todos.reducer';
import { PRIORITY, Todo } from '../../utils/types';

const AddTodo = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');
  const [priority, setPriority] = useState(PRIORITY.MEDIUM);

  function addTodoHandler() {
    if (todoText.length < 1) {
      alert('You should provide a text in your todo item before adding it');
    } else {
      const todo = Todo({ text: todoText, priority: priority });
      dispatch(addTodo(todo));
      setTodoText('');
    }
  }

  function onChangeHandler(e) {
    const { name, value } = e.target;

    switch (name) {
      case 'text':
        setTodoText(value);
        break;

      case 'priority':
        setPriority(value);
        break;
      default:
        break;
    }
  }

  return (
    <div>
      {/* Todo item section */}
      <section className="flex gap-2">
        <input
          className="flex-1 rounded-xl border-2 p-2"
          placeholder="Your next todo"
          name="text"
          value={todoText}
          required
          onChange={onChangeHandler}
        />
        <button
          onClick={addTodoHandler}
          className="rounded-xl border-2 border-amber-500 bg-amber-100 px-2 hover:bg-amber-200 md:cursor-pointer"
        >
          ADD
        </button>
      </section>
      {/* Todo option setup section */}
      <section className="my-2 flex gap-2">
        <h3>Priority</h3>
        <select
          onChange={onChangeHandler}
          name="priority"
          defaultValue={PRIORITY.MEDIUM}
        >
          {Object.entries(PRIORITY).map(([key, value]) => {
            return (
              <option key={key} value={value}>
                {value}
              </option>
            );
          })}
        </select>
      </section>
    </div>
  );
};

export default AddTodo;
