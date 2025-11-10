import { X } from 'lucide-react';
import { cn } from '../../utils/utils';
import { PRIORITY } from '../../utils/types';

const TodoItem = ({ todo, removeTodoItemHandler, className, ...rest }) => {
  const { text, isCompleted, priority } = todo;
  function prioStyle() {
    switch (priority) {
      case PRIORITY.HIGH:
        return 'border-red-500 bg-red-100';
      case PRIORITY.MEDIUM:
        return 'border-yellow-500 ';
      case PRIORITY.LOW:
        return 'border-green-500 bg-green-100';
      default:
        return '';
    }
  }
  return (
    <li
      className={cn(
        'my-2 flex items-center rounded-xl border-2 border-amber-900 p-2 md:cursor-pointer',
        isCompleted ? 'border-neutral-400 bg-neutral-50 text-neutral-500' : '',
        prioStyle(),
        className
      )}
      {...rest}
    >
      <div className={cn('flex-1', isCompleted ? 'line-through' : '')}>
        {text}
      </div>
      <button
        className="rounded-xl border-2 border-amber-500 p-1.5 md:cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          if (!isCompleted) {
            removeTodoItemHandler(todo);
          }
        }}
      >
        <X className="h-4 w-4" />
      </button>
    </li>
  );
};

export default TodoItem;
