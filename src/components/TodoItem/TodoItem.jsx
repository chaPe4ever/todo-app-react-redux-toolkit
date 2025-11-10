import { X } from 'lucide-react';
import { cn } from '../../utils/utils';

const TodoItem = ({ todo, removeTodoItemHandler, className, ...rest }) => {
  const { content, isCompleted } = todo;
  return (
    <li
      className={cn(
        'my-2 flex items-center rounded-xl border-2 p-2 md:cursor-pointer',
        isCompleted ? 'border-neutral-400 bg-neutral-50 text-neutral-500' : '',
        className
      )}
      {...rest}
    >
      <div className={cn('flex-1', isCompleted ? 'line-through' : '')}>
        {content}
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
