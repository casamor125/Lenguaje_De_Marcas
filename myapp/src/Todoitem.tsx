import React from "react";

interface TodoItemProps {
  content: string;
  onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps>= ({ content, onDelete }) => {
  return (
    <li>
      {content}
      <button onClick={onDelete}>Hecha</button>
    </li>
  );
};

export default TodoItem;