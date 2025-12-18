import { useState } from 'react'

function App() {

  const [tasks, setTasks] = useState([]);
  const [newTask,setNewTask] = useState('');

  const addTask = ()=>{
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), text: newTask },
      ]);
      setNewTask('');
    }
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  return (
    <>
     <div>
      <h2>To-Do List</h2>
      
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
          >
            <span>{task.text}</span>
            <button
              className="delete-button"
              onClick={() => deleteTask(task.id)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      
    </div>
    </>
  )
}

export default App
