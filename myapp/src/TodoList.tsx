import React, { useState } from "react";
import Todoitem from "./Todoitem";

function TodoList() {

    const [tasks, setTasks] = useState(["Tasca 1", "Tasca2"]);
    return (
        <div>
            <h2>mi lista</h2>
            <ul>
                {tasks.map((task, index) => (

                    <Todoitem key = {index} content = {task}/>
                ))}
            </ul>
        </div>

    );
}
export default TodoList;