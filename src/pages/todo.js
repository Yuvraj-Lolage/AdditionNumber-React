import { useState } from "react";
// import "bootstrap/dist/css/b"
function Todo() {
    const [tasklist, setTaskList] = useState([]);
    const [task, setTask] = useState('');


    const handleInputChange = (event) => {
        setTask(event.target.value);
    };

    const addTask = (e) => {
        // e.preventDefault();
        if (task.trim() !== '') {
            setTaskList([...tasklist, task]);
            console.log("After", tasklist);
            setTask('');
        }
    }

    const handleDeleteTask = (index) => {
        const updatedTasks = tasklist.filter((task, i) => i !== index);
        setTaskList(updatedTasks);
    }
    return (
        <div>
            <h1>To do List</h1>
            <input type="text"
                id="task"
                value={task}
                name="task"
                placeholder="Enter Task"
                onChange={handleInputChange}
            ></input>

            <button onClick={addTask} >Add Task</button>

            <ul>
                {tasklist.map((task, index) => (
                    <li key={index}>
                        {task} <button onClick={() => handleDeleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>

        </div>
    );

}

export default Todo;