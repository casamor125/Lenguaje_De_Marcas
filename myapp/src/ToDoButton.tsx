import React, { useState } from "react";




interface TodoButtonProps {
  onAddTask: (text: string) => void;
}
const TodoButton: React.FC<TodoButtonProps> = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const handleClick = () => {
    if (newTask.trim() !== "") {
      onAddTask(newTask);
      setNewTask("");
    }
  };

  return (
    <div>
      <input type="text" value={newTask} onChange={handleChange} />
      <button onClick={handleClick}>Agregar Tarea</button>
    </div>
  );
}

export default TodoButton;