import { Todo } from './types';

export const fetchTodos = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return fakeTodos;
};

const fakeTodos = [
  ...Array.from({ length: 3 }, (_, i) =>
    Todo({
      text: `Todo ${i + 1}`,
    })
  ),
];
