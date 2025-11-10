import { Todo } from './types';

export const fetchTodos = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return fakeTodos;
};

const fakeTodos = [
  ...Array.from({ length: 7 }, (_, i) =>
    Todo({
      text: `Todo ${i + 1}`,
      priority: ['Low', 'Medium', 'High'][Math.floor(Math.random() * 3)],
    })
  ),
];
