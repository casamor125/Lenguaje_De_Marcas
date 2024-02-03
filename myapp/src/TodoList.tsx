import React, { useState } from "react";
import Todoitem from "./Todoitem";
import { Button } from "react-bootstrap";

function TodoList() {

    const [tasks, setTasks] = useState(["Tasca 1", "Tasca 2"]);

    function addTask(texto: string){
        setTasks(curretnTAsks =>[...curretnTAsks, texto])

    }
    return (
        <div>
            <h2>mi lista</h2>
            <ul>
                {tasks.map((task, index) => (

                    <Todoitem key = {index} content = {task}/>
                ))}
            </ul>
            <Button variant = "success" onClick={()=>addTask("nuevatarea")}></Button>
        </div>

    );
}
export default TodoList;