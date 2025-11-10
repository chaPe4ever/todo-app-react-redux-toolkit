const TodoItem = ({ todo }) => {
  const { content } = todo;
  return <li>{content}</li>;
};

export default TodoItem;
