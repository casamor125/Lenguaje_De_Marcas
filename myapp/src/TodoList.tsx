import React, { useState } from "react";
import Todoitem from "./Todoitem";
import ToDoButton from "./ToDoButton";

function TodoList() {
  const [tasks, setTasks] = useState(["Tarea 1", "Tarea 2"]);
   

  const addTask = (text:string) => {
    setTasks([...tasks, text]);
  };

  const deleteTask = (index:number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div>
      <h2>Mi Lista de Tareas</h2>
      <ToDoButton onAddTask={addTask} />
      <ul>
        {tasks.map((task, index) => (
          <Todoitem key={index} content={task} onDelete={() => deleteTask(index)} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;